const QUIZ_TEST_TYPES = [
    {
        id: 'single',
        title: 'Тест: одна правильна відповідь',
        description: 'Класичний формат з одним правильним варіантом.'
    },
    {
        id: 'multi',
        title: 'Тест: дві або кілька правильних відповідей',
        description: 'Потрібно відмітити всі правильні варіанти.'
    },
    {
        id: 'match-columns',
        title: 'Тест: співпадіння колонок',
        description: 'Зіставлення понять у двох колонках.'
    },
    {
        id: 'mapping',
        title: 'Тест: відповідність 1-а 2-б 3-в',
        description: 'Встановити правильну відповідність між елементами.'
    },
    {
        id: 'text',
        title: 'Тест: введення слова',
        description: 'Відповідь потрібно ввести вручну.'
    }
];

const QUIZ_QUESTIONS_BY_TYPE = {
    single: [
        {
            type: 'single',
            question: 'Який протокол забезпечує захищене веб-зєднання?',
            options: ['HTTP', 'SMTP', 'HTTPS', 'FTP'],
            answer: 2
        },
        {
            type: 'single',
            question: 'Що означає MFA у кібербезпеці?',
            options: [
                'Manual File Analysis',
                'Multi-Factor Authentication',
                'Managed Firewall Access',
                'Machine Flow Audit'
            ],
            answer: 1
        },
        {
            type: 'single',
            question: 'Яка атака спрямована на масове перевантаження сервера?',
            options: ['DDoS', 'Phishing', 'Smishing', 'Whaling'],
            answer: 0
        },
        {
            type: 'single',
            question: 'Що є головною метою ransomware?',
            options: [
                'Збільшити продуктивність системи',
                'Шифрувати дані та вимагати викуп',
                'Оптимізувати логування',
                'Автоматично оновити ОС'
            ],
            answer: 1
        },
        {
            type: 'single',
            question: 'Яка модель в кібербезпеці працює за принципом Never trust, always verify?',
            options: ['CIA Triad', 'Kill Chain', 'Zero Trust', 'MITRE D3FEND'],
            answer: 2
        }
    ],
    multi: [
        {
            type: 'multi',
            question: 'Оберіть ознаки фішингового листа.',
            options: [
                'Підозрілий домен відправника',
                'Терміновий заклик негайно діяти',
                'Гарантований цифровий підпис компанії',
                'Запит пароля або CVV-коду'
            ],
            answers: [0, 1, 3]
        },
        {
            type: 'multi',
            question: 'Які дії покращують кібергігієну користувача?',
            options: [
                'Використання MFA',
                'Оновлення ПЗ',
                'Один пароль для всіх сервісів',
                'Перевірка URL перед входом'
            ],
            answers: [0, 1, 3]
        },
        {
            type: 'multi',
            question: 'Що може бути векторами соціальної інженерії?',
            options: ['Телефонний дзвінок', 'Лист на email', 'Локальна офлайн-резервна копія', 'Месенджери'],
            answers: [0, 1, 3]
        },
        {
            type: 'multi',
            question: 'Оберіть базові функції NIST CSF.',
            options: ['Identify', 'Protect', 'Compile', 'Recover'],
            answers: [0, 1, 3]
        },
        {
            type: 'multi',
            question: 'Які практики відносяться до реагування на інцидент?',
            options: ['Containment', 'Lessons learned', 'Відключення журналювання', 'Communication plan'],
            answers: [0, 1, 3]
        }
    ],
    'match-columns': [
        {
            type: 'match-columns',
            question: 'Зіставте термін і визначення.',
            leftItems: ['Phishing', 'Smishing', 'Vishing'],
            rightItems: [
                { id: 'a', text: 'Шахрайство через SMS' },
                { id: 'b', text: 'Шахрайство через email' },
                { id: 'c', text: 'Шахрайство через телефонний дзвінок' }
            ],
            answers: ['b', 'a', 'c']
        },
        {
            type: 'match-columns',
            question: 'Зіставте інструмент захисту з його призначенням.',
            leftItems: ['Firewall', 'SIEM', 'MFA'],
            rightItems: [
                { id: 'a', text: 'Додатковий фактор перевірки особи' },
                { id: 'b', text: 'Централізований аналіз подій безпеки' },
                { id: 'c', text: 'Фільтрація мережевого трафіку' }
            ],
            answers: ['c', 'b', 'a']
        },
        {
            type: 'match-columns',
            question: 'Зіставте тип шкідливого ПЗ з поведінкою.',
            leftItems: ['Ransomware', 'Spyware', 'Trojan'],
            rightItems: [
                { id: 'a', text: 'Шифрує файли для вимагання викупу' },
                { id: 'b', text: 'Приховано збирає дані користувача' },
                { id: 'c', text: 'Маскується під легітимну програму' }
            ],
            answers: ['a', 'b', 'c']
        }
    ],
    mapping: [
        {
            type: 'mapping',
            question: 'Встановіть відповідність етапів Kill Chain.',
            numberedItems: [
                '1. Reconnaissance',
                '2. Delivery',
                '3. Exploitation'
            ],
            letteredItems: [
                { id: 'a', text: 'Доставка шкідливого вмісту до жертви' },
                { id: 'b', text: 'Збір інформації про ціль' },
                { id: 'c', text: 'Використання вразливості для виконання коду' }
            ],
            answers: ['b', 'a', 'c']
        },
        {
            type: 'mapping',
            question: 'Встановіть відповідність категорій CIA triad.',
            numberedItems: [
                '1. Confidentiality',
                '2. Integrity',
                '3. Availability'
            ],
            letteredItems: [
                { id: 'a', text: 'Доступність ресурсів для авторизованих користувачів' },
                { id: 'b', text: 'Захист від несанкціонованого розголошення' },
                { id: 'c', text: 'Точність і незмінність даних' }
            ],
            answers: ['b', 'c', 'a']
        },
        {
            type: 'mapping',
            question: 'Встановіть відповідність ролей у реагуванні на інцидент.',
            numberedItems: [
                '1. SOC-аналітик',
                '2. Incident manager',
                '3. Forensics-спеціаліст'
            ],
            letteredItems: [
                { id: 'a', text: 'Координує команду та комунікації' },
                { id: 'b', text: 'Аналізує сліди атаки та цифрові артефакти' },
                { id: 'c', text: 'Виявляє і первинно класифікує події безпеки' }
            ],
            answers: ['c', 'a', 'b']
        }
    ],
    text: [
        {
            type: 'text',
            question: 'Введіть абревіатуру багатофакторної автентифікації (англійською).',
            acceptedAnswers: ['mfa']
        },
        {
            type: 'text',
            question: 'Як називається шахрайство через SMS? Введіть один термін англійською.',
            acceptedAnswers: ['smishing']
        },
        {
            type: 'text',
            question: 'Введіть назву моделі безпеки з принципом never trust, always verify (2 слова).',
            acceptedAnswers: ['zero trust', 'zerotrust']
        },
        {
            type: 'text',
            question: 'Введіть термін для оцінки критичності вразливостей (4 літери).',
            acceptedAnswers: ['cvss']
        },
        {
            type: 'text',
            question: 'Введіть англомовну назву атаки, що шифрує дані і вимагає викуп.',
            acceptedAnswers: ['ransomware']
        }
    ]
};

function getQuestionsByTestType(testTypeId) {
    return QUIZ_QUESTIONS_BY_TYPE[testTypeId] || [];
}
