let startTime;
let activeQuestions = [];
let activeTestTypeId = 'single';

window.addEventListener('DOMContentLoaded', function () {
    renderTestTypeOptions();

    document.getElementById('start-quiz-btn').addEventListener('click', startQuiz);
    document.getElementById('quizForm').addEventListener('submit', handleSubmit);
});

function renderTestTypeOptions() {
    const typeList = document.getElementById('test-type-list');
    typeList.innerHTML = '';

    QUIZ_TEST_TYPES.forEach(function (testType, index) {
        const option = document.createElement('div');
        option.className = 'topic-option';
        option.dataset.testTypeId = testType.id;

        if (index === 0) {
            option.classList.add('active');
            activeTestTypeId = testType.id;
        }

        const title = document.createElement('h3');
        title.textContent = testType.title;

        const description = document.createElement('p');
        description.textContent = testType.description;

        option.appendChild(title);
        option.appendChild(description);

        option.addEventListener('click', function () {
            document.querySelectorAll('.topic-option').forEach(function (item) {
                item.classList.remove('active');
            });

            option.classList.add('active');
            activeTestTypeId = testType.id;
        });

        typeList.appendChild(option);
    });
}

function startQuiz() {
    const questions = getQuestionsByTestType(activeTestTypeId);

    if (!questions.length) {
        alert('Для обраного виду тестування ще немає питань.');
        return;
    }

    activeQuestions = shuffleArray(questions.slice());

    const selectedType = QUIZ_TEST_TYPES.find(function (testType) {
        return testType.id === activeTestTypeId;
    });

    document.getElementById('active-topic-title').textContent = selectedType
        ? selectedType.title
        : 'Тест з кібербезпеки';

    document.getElementById('quiz-config').style.display = 'none';
    document.getElementById('quiz-section').style.display = 'block';

    displayQuestions(activeQuestions);
    startTime = Date.now();
}

function displayQuestions(questions) {
    const container = document.getElementById('questions-container');
    container.innerHTML = '';

    questions.forEach(function (q, index) {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question';

        const questionTitle = document.createElement('h3');
        questionTitle.textContent = (index + 1) + '. ' + q.question;
        questionDiv.appendChild(questionTitle);

        if (q.type === 'single') {
            renderSingleQuestion(questionDiv, q, index);
        }

        if (q.type === 'multi') {
            renderMultiQuestion(questionDiv, q, index);
        }

        if (q.type === 'match-columns') {
            renderMatchColumnsQuestion(questionDiv, q, index);
        }

        if (q.type === 'mapping') {
            renderMappingQuestion(questionDiv, q, index);
        }

        if (q.type === 'text') {
            renderTextQuestion(questionDiv, index);
        }

        container.appendChild(questionDiv);
    });
}

function renderSingleQuestion(questionDiv, q, index) {
    const optionsList = document.createElement('ul');
    optionsList.className = 'options';

    q.options.forEach(function (option, optIndex) {
        const li = document.createElement('li');

        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'q' + index;
        radio.value = String(optIndex);
        radio.id = 'q' + index + '_' + optIndex;

        const label = document.createElement('label');
        label.htmlFor = radio.id;
        label.textContent = option;

        li.appendChild(radio);
        li.appendChild(label);
        optionsList.appendChild(li);

        li.addEventListener('click', function () {
            radio.checked = true;
        });
    });

    questionDiv.appendChild(optionsList);
}

function renderMultiQuestion(questionDiv, q, index) {
    const optionsList = document.createElement('ul');
    optionsList.className = 'options';

    q.options.forEach(function (option, optIndex) {
        const li = document.createElement('li');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.name = 'q' + index;
        checkbox.value = String(optIndex);
        checkbox.id = 'q' + index + '_' + optIndex;

        const label = document.createElement('label');
        label.htmlFor = checkbox.id;
        label.textContent = option;

        li.appendChild(checkbox);
        li.appendChild(label);
        optionsList.appendChild(li);
    });

    questionDiv.appendChild(optionsList);
}

function renderMatchColumnsQuestion(questionDiv, q, index) {
    const wrapper = document.createElement('div');
    wrapper.className = 'match-wrapper';

    const helper = document.createElement('p');
    helper.className = 'question-hint';
    helper.textContent = 'Оберіть відповідність для кожного елемента з лівої колонки.';
    wrapper.appendChild(helper);

    q.leftItems.forEach(function (leftItem, leftIndex) {
        const row = document.createElement('div');
        row.className = 'matching-row';

        const left = document.createElement('div');
        left.className = 'matching-left';
        left.textContent = leftItem;

        const select = document.createElement('select');
        select.name = 'q' + index + '_left_' + leftIndex;
        select.className = 'matching-select';

        const defaultOption = document.createElement('option');
        defaultOption.value = '';
        defaultOption.textContent = 'Оберіть варіант';
        select.appendChild(defaultOption);

        q.rightItems.forEach(function (rightItem) {
            const option = document.createElement('option');
            option.value = rightItem.id;
            option.textContent = rightItem.id.toUpperCase() + '. ' + rightItem.text;
            select.appendChild(option);
        });

        row.appendChild(left);
        row.appendChild(select);
        wrapper.appendChild(row);
    });

    questionDiv.appendChild(wrapper);
}

function renderMappingQuestion(questionDiv, q, index) {
    const wrapper = document.createElement('div');
    wrapper.className = 'match-wrapper';

    const helper = document.createElement('p');
    helper.className = 'question-hint';
    helper.textContent = 'Формат 1-а 2-б 3-в: оберіть літеру для кожного пункту.';
    wrapper.appendChild(helper);

    const legend = document.createElement('div');
    legend.className = 'mapping-legend';

    q.letteredItems.forEach(function (item) {
        const line = document.createElement('p');
        line.textContent = item.id.toUpperCase() + '. ' + item.text;
        legend.appendChild(line);
    });

    wrapper.appendChild(legend);

    q.numberedItems.forEach(function (numberedItem, itemIndex) {
        const row = document.createElement('div');
        row.className = 'matching-row';

        const left = document.createElement('div');
        left.className = 'matching-left';
        left.textContent = numberedItem;

        const select = document.createElement('select');
        select.name = 'q' + index + '_map_' + itemIndex;
        select.className = 'matching-select';

        const defaultOption = document.createElement('option');
        defaultOption.value = '';
        defaultOption.textContent = 'Оберіть літеру';
        select.appendChild(defaultOption);

        q.letteredItems.forEach(function (letteredItem) {
            const option = document.createElement('option');
            option.value = letteredItem.id;
            option.textContent = letteredItem.id.toUpperCase();
            select.appendChild(option);
        });

        row.appendChild(left);
        row.appendChild(select);
        wrapper.appendChild(row);
    });

    questionDiv.appendChild(wrapper);
}

function renderTextQuestion(questionDiv, index) {
    const wrapper = document.createElement('div');
    wrapper.className = 'text-answer-wrapper';

    const input = document.createElement('input');
    input.type = 'text';
    input.name = 'q' + index + '_text';
    input.className = 'text-answer-input';
    input.placeholder = 'Введіть відповідь';

    wrapper.appendChild(input);
    questionDiv.appendChild(wrapper);
}

function handleSubmit(e) {
    e.preventDefault();

    if (!activeQuestions.length) {
        return;
    }

    let score = 0;
    let answered = 0;

    activeQuestions.forEach(function (q, index) {
        const result = evaluateQuestion(q, index);
        if (result.answered) {
            answered++;
        }
        if (result.correct) {
            score++;
        }
    });

    if (answered < activeQuestions.length) {
        alert('Ви відповіли тільки на ' + answered + ' з ' + activeQuestions.length + ' питань. Будь ласка, дайте відповідь на всі питання.');
        return;
    }

    const timeSpent = (Date.now() - startTime) / 1000;
    const minutes = Math.floor(timeSpent / 60);
    const seconds = Math.floor(timeSpent % 60);

    saveTestLog(score, activeQuestions.length - score, timeSpent, activeTestTypeId);

    document.getElementById('quiz-section').style.display = 'none';
    document.getElementById('result-section').style.display = 'block';

    const selectedType = QUIZ_TEST_TYPES.find(function (testType) {
        return testType.id === activeTestTypeId;
    });

    document.getElementById('type-display').textContent =
        'Формат: ' + (selectedType ? selectedType.title : 'Невідомий формат');

    const percentage = ((score / activeQuestions.length) * 100).toFixed(1);
    document.getElementById('score-display').textContent =
        'Ваш результат: ' + score + ' з ' + activeQuestions.length + ' (' + percentage + '%)';
    document.getElementById('time-display').textContent =
        'Витрачено часу: ' + minutes + ' хв ' + seconds + ' сек';
}

function evaluateQuestion(q, index) {
    if (q.type === 'single') {
        const selected = document.querySelector('input[name="q' + index + '"]:checked');
        if (!selected) {
            return { answered: false, correct: false };
        }
        return {
            answered: true,
            correct: parseInt(selected.value, 10) === q.answer
        };
    }

    if (q.type === 'multi') {
        const selectedNodes = document.querySelectorAll('input[name="q' + index + '"]:checked');
        if (!selectedNodes.length) {
            return { answered: false, correct: false };
        }

        const selectedValues = Array.from(selectedNodes)
            .map(function (node) { return parseInt(node.value, 10); })
            .sort(function (a, b) { return a - b; });

        const expectedValues = q.answers.slice().sort(function (a, b) { return a - b; });

        return {
            answered: true,
            correct: arraysEqual(selectedValues, expectedValues)
        };
    }

    if (q.type === 'match-columns') {
        const selectedValues = [];

        for (let i = 0; i < q.leftItems.length; i++) {
            const field = document.querySelector('select[name="q' + index + '_left_' + i + '"]');
            if (!field || !field.value) {
                return { answered: false, correct: false };
            }
            selectedValues.push(field.value);
        }

        return {
            answered: true,
            correct: arraysEqual(selectedValues, q.answers)
        };
    }

    if (q.type === 'mapping') {
        const selectedValues = [];

        for (let i = 0; i < q.numberedItems.length; i++) {
            const field = document.querySelector('select[name="q' + index + '_map_' + i + '"]');
            if (!field || !field.value) {
                return { answered: false, correct: false };
            }
            selectedValues.push(field.value);
        }

        return {
            answered: true,
            correct: arraysEqual(selectedValues, q.answers)
        };
    }

    if (q.type === 'text') {
        const field = document.querySelector('input[name="q' + index + '_text"]');
        if (!field || !field.value.trim()) {
            return { answered: false, correct: false };
        }

        const userAnswer = normalizeText(field.value);
        const expectedAnswers = q.acceptedAnswers.map(normalizeText);

        return {
            answered: true,
            correct: expectedAnswers.includes(userAnswer)
        };
    }

    return { answered: false, correct: false };
}

function saveTestLog(successes, fails, timeSpent, testTypeId) {
    const testLogs = JSON.parse(localStorage.getItem('testLogs') || '[]');

    const selectedType = QUIZ_TEST_TYPES.find(function (testType) {
        return testType.id === testTypeId;
    });

    testLogs.push({
        id: testLogs.length + 1,
        testName: 'quiz',
        testTypeId: testTypeId,
        testTypeTitle: selectedType ? selectedType.title : 'Невідомий формат',
        timestamp: new Date().toISOString(),
        attempts: 1,
        successes: successes,
        fails: fails,
        timeSpent: timeSpent
    });

    localStorage.setItem('testLogs', JSON.stringify(testLogs));
}

function arraysEqual(a, b) {
    if (a.length !== b.length) {
        return false;
    }

    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            return false;
        }
    }

    return true;
}

function normalizeText(value) {
    return value.trim().toLowerCase().replace(/\s+/g, ' ');
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
