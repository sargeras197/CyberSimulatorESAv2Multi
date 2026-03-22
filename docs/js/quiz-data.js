const THEME_LABELS = {
    phishing: 'Фішинг і соціальна інженерія',
    mfa: 'Паролі, 2FA та MFA',
    malware: 'Шкідливе ПЗ',
    network: 'Мережева безпека',
    cloud: 'Хмара та IoT',
    incident: 'Інцидент-менеджмент',
    risk: 'Ризики, CVE, CVSS',
    finance: 'Фінансові кіберзлочини',
    law: 'Право та етика',
    backup: 'Захист даних і резервування',
    zero_trust: 'Zero Trust і контроль доступу',
    attack_models: 'Моделі кібератак',
    stride: 'STRIDE-моделювання загроз',
    mitre: 'MITRE ATT&CK',
    kill_chain: 'Cyber Kill Chain',
    identity: 'Цифрова ідентичність',
    email_security: 'Безпека електронної пошти',
    browser_security: 'Безпека браузера та URL',
    api_security: 'API Security',
    forensics: 'Цифрова криміналістика'
};

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
            theme: 'phishing',
            question: 'Який тип атаки націлений на виманювання логіну і паролю через підроблений лист?',
            options: ['DDoS', 'Phishing', 'SQL Backup', 'Hashing'],
            answer: 1
        },
        {
            type: 'single',
            theme: 'mfa',
            question: 'Що найбільш точно описує MFA?',
            options: [
                'Один складний пароль',
                'Декілька незалежних факторів автентифікації',
                'Лише SMS-код без паролю',
                'Вхід через публічний Wi-Fi'
            ],
            answer: 1
        },
        {
            type: 'single',
            theme: 'malware',
            question: 'Який тип шкідливого ПЗ шифрує файли і вимагає викуп?',
            options: ['Spyware', 'Adware', 'Ransomware', 'Rootkit'],
            answer: 2
        },
        {
            type: 'single',
            theme: 'network',
            question: 'Яка технологія в першу чергу фільтрує вхідний і вихідний мережевий трафік?',
            options: ['Firewall', 'VPN', 'Proxy PAC', 'CMS'],
            answer: 0
        },
        {
            type: 'single',
            theme: 'cloud',
            question: 'Що означає shared responsibility model у хмарі?',
            options: [
                'Провайдер відповідає за все',
                'Клієнт відповідає за все',
                'Відповідальність за безпеку розподілена між провайдером і клієнтом',
                'Відповідальність тільки у SOC'
            ],
            answer: 2
        },
        {
            type: 'single',
            theme: 'incident',
            question: 'Що є першою дією після підтвердження інциденту безпеки?',
            options: ['Delete logs', 'Containment', 'Ignore alert', 'Disable backups'],
            answer: 1
        },
        {
            type: 'single',
            theme: 'risk',
            question: 'Для чого використовується CVSS?',
            options: [
                'Для шифрування пошти',
                'Для оцінювання критичності вразливостей',
                'Для генерації OTP',
                'Для блокування доменів'
            ],
            answer: 1
        },
        {
            type: 'single',
            theme: 'finance',
            question: 'Як називається фішинг через SMS?',
            options: ['Smishing', 'Whaling', 'VLANing', 'Sniffing'],
            answer: 0
        },
        {
            type: 'single',
            theme: 'law',
            question: 'Етичний пентест має виконуватись лише:',
            options: [
                'Анонімно без повідомлення',
                'За письмовим дозволом власника системи',
                'Під час пікового навантаження',
                'Без журналювання'
            ],
            answer: 1
        },
        {
            type: 'single',
            theme: 'backup',
            question: 'Яка практика найкраще захищає від втрати даних після атаки?',
            options: ['Only screenshots', 'Offline backups', 'Disable updates', 'Single disk only'],
            answer: 1
        },
        {
            type: 'single',
            theme: 'zero_trust',
            question: 'Який головний принцип Zero Trust?',
            options: ['Trust but verify', 'Never trust, always verify', 'Open access by default', 'Shared password policy'],
            answer: 1
        },
        {
            type: 'single',
            theme: 'attack_models',
            question: 'Яка модель описує послідовні етапи атаки від розвідки до дій?',
            options: ['CIA triad', 'Cyber Kill Chain', 'CAPTCHA', 'NTP model'],
            answer: 1
        },
        {
            type: 'single',
            theme: 'stride',
            question: 'До STRIDE відноситься категорія:',
            options: ['Tampering', 'Caching', 'Compression', 'Tracking'],
            answer: 0
        },
        {
            type: 'single',
            theme: 'mitre',
            question: 'MITRE ATT&CK це в першу чергу:',
            options: ['База сигнатур антивірусу', 'База тактик і технік зловмисників', 'Шифрувальний алгоритм', 'Система бекапів'],
            answer: 1
        },
        {
            type: 'single',
            theme: 'kill_chain',
            question: 'Який етап Kill Chain передує Exploitation?',
            options: ['Delivery', 'Recovery', 'Forensics', 'Attribution'],
            answer: 0
        },
        {
            type: 'single',
            theme: 'identity',
            question: 'Що найкраще зменшує ризик компрометації акаунта?',
            options: ['Один пароль скрізь', 'MFA і унікальні паролі', 'Відключення журналів входу', 'Вхід через публічний Wi-Fi'],
            answer: 1
        },
        {
            type: 'single',
            theme: 'email_security',
            question: 'Який запис у DNS допомагає запобігти підміні відправника?',
            options: ['TXT DKIM/SPF/DMARC', 'A record only', 'CNAME only', 'PTR only'],
            answer: 0
        },
        {
            type: 'single',
            theme: 'browser_security',
            question: 'Що таке homograph-атака?',
            options: ['Підміна домену схожими символами', 'Підбір паролів у браузері', 'Відключення cookies', 'Скан портів'],
            answer: 0
        },
        {
            type: 'single',
            theme: 'api_security',
            question: 'Що є базовою практикою для API Security?',
            options: ['Відкритий доступ без auth', 'Rate limiting та токенна автентифікація', 'Вимкнення HTTPS', 'Зберігання ключа у JS-клієнті'],
            answer: 1
        },
        {
            type: 'single',
            theme: 'forensics',
            question: 'Яка мета digital forensics після інциденту?',
            options: ['Приховати сліди', 'Зібрати і проаналізувати цифрові докази', 'Видалити логи', 'Вимкнути SOC'],
            answer: 1
        }
    ],
    multi: [
        {
            type: 'multi',
            theme: 'phishing',
            question: 'Оберіть типові ознаки фішингового листа.',
            options: ['Підозрілий домен', 'Терміновість', 'Офіційний підпис DKIM', 'Запит пароля'],
            answers: [0, 1, 3]
        },
        {
            type: 'multi',
            theme: 'mfa',
            question: 'Що є факторами автентифікації?',
            options: ['Щось, що ви знаєте', 'Щось, що ви маєте', 'Щось, чим ви є', 'Публічний IP'],
            answers: [0, 1, 2]
        },
        {
            type: 'multi',
            theme: 'malware',
            question: 'Оберіть приклади malware.',
            options: ['Trojan', 'Ransomware', 'Patch management', 'Spyware'],
            answers: [0, 1, 3]
        },
        {
            type: 'multi',
            theme: 'network',
            question: 'Які заходи підвищують мережеву безпеку?',
            options: ['Сегментація мережі', 'Firewall rules', 'Вимкнення логування', 'IDS/IPS'],
            answers: [0, 1, 3]
        },
        {
            type: 'multi',
            theme: 'cloud',
            question: 'Оберіть коректні практики хмарної безпеки.',
            options: ['MFA для адмінів', 'Ротація ключів', 'Відкриті bucket без контролю', 'Least privilege'],
            answers: [0, 1, 3]
        },
        {
            type: 'multi',
            theme: 'incident',
            question: 'Що входить до реагування на інцидент?',
            options: ['Detection', 'Containment', 'Eradication', 'Видалення резервних копій'],
            answers: [0, 1, 2]
        },
        {
            type: 'multi',
            theme: 'risk',
            question: 'Що враховують при оцінці ризику?',
            options: ['Ймовірність', 'Наслідки', 'Колір інтерфейсу', 'Цінність активу'],
            answers: [0, 1, 3]
        },
        {
            type: 'multi',
            theme: 'finance',
            question: 'Оберіть приклади фінансового кібер-шахрайства.',
            options: ['Carding', 'Fake ICO', 'Code review', 'Money mule'],
            answers: [0, 1, 3]
        },
        {
            type: 'multi',
            theme: 'law',
            question: 'Що є етичними практиками в кібербезпеці?',
            options: ['Responsible disclosure', 'Доступ без дозволу', 'Наявність scope', 'Повідомлення про ризики'],
            answers: [0, 2, 3]
        },
        {
            type: 'multi',
            theme: 'backup',
            question: 'Що покращує стійкість до втрати даних?',
            options: ['3-2-1 backup strategy', 'Тест відновлення', 'Одна копія на тому ж диску', 'Immutable backup'],
            answers: [0, 1, 3]
        },
        {
            type: 'multi',
            theme: 'zero_trust',
            question: 'Оберіть принципи Zero Trust.',
            options: ['Безперервна верифікація', 'Мінімальні привілеї', 'Довіра за фактом підключення', 'Сегментація доступу'],
            answers: [0, 1, 3]
        },
        {
            type: 'multi',
            theme: 'attack_models',
            question: 'Що допомагають робити моделі атак?',
            options: ['Структурувати сценарії загроз', 'Планувати захисні контролі', 'Автоматично шифрувати диски', 'Проводити threat hunting'],
            answers: [0, 1, 3]
        },
        {
            type: 'multi',
            theme: 'stride',
            question: 'Оберіть категорії STRIDE.',
            options: ['Spoofing', 'Tampering', 'Hashing', 'Repudiation'],
            answers: [0, 1, 3]
        },
        {
            type: 'multi',
            theme: 'mitre',
            question: 'MITRE ATT&CK корисний для:',
            options: ['Мапінгу технік атаки', 'Threat hunting', 'Керування шрифтами UI', 'Оцінки покриття детекції'],
            answers: [0, 1, 3]
        },
        {
            type: 'multi',
            theme: 'kill_chain',
            question: 'Оберіть етапи Cyber Kill Chain.',
            options: ['Reconnaissance', 'Delivery', 'Exploitation', 'Compression'],
            answers: [0, 1, 2]
        },
        {
            type: 'multi',
            theme: 'identity',
            question: 'Що покращує захист цифрової ідентичності?',
            options: ['Унікальні паролі', 'MFA', 'Публікація OTP в чаті', 'Моніторинг підозрілих входів'],
            answers: [0, 1, 3]
        },
        {
            type: 'multi',
            theme: 'email_security',
            question: 'Які механізми належать до поштової автентифікації?',
            options: ['SPF', 'DKIM', 'DMARC', 'WEP'],
            answers: [0, 1, 2]
        },
        {
            type: 'multi',
            theme: 'browser_security',
            question: 'Що є хорошою практикою безпеки браузера?',
            options: ['Перевірка домену', 'Оновлення браузера', 'Ігнорування попереджень TLS', 'Вимкнення небезпечних розширень'],
            answers: [0, 1, 3]
        },
        {
            type: 'multi',
            theme: 'api_security',
            question: 'Оберіть практики API Security.',
            options: ['OAuth2/JWT', 'Rate limiting', 'Відсутність авторизації', 'Валідація вводу'],
            answers: [0, 1, 3]
        },
        {
            type: 'multi',
            theme: 'forensics',
            question: 'Що важливо для цифрової криміналістики?',
            options: ['Цілісність доказів', 'Часові мітки', 'Ланцюг зберігання доказів', 'Видалення журналів'],
            answers: [0, 1, 2]
        }
    ],
    'match-columns': [
        {
            type: 'match-columns',
            theme: 'phishing',
            question: 'Зіставте тип атаки і канал.',
            leftItems: ['Phishing', 'Smishing', 'Vishing'],
            rightItems: [
                { id: 'a', text: 'SMS' },
                { id: 'b', text: 'Email' },
                { id: 'c', text: 'Телефонний дзвінок' }
            ],
            answers: ['b', 'a', 'c']
        },
        {
            type: 'match-columns',
            theme: 'mfa',
            question: 'Зіставте фактор і приклад.',
            leftItems: ['Щось, що ви знаєте', 'Щось, що ви маєте', 'Щось, чим ви є'],
            rightItems: [
                { id: 'a', text: 'Смартфон з OTP' },
                { id: 'b', text: 'Пароль' },
                { id: 'c', text: 'Відбиток пальця' }
            ],
            answers: ['b', 'a', 'c']
        },
        {
            type: 'match-columns',
            theme: 'malware',
            question: 'Зіставте malware та його поведінку.',
            leftItems: ['Trojan', 'Spyware', 'Ransomware'],
            rightItems: [
                { id: 'a', text: 'Шифрує дані для викупу' },
                { id: 'b', text: 'Маскується під легітимний файл' },
                { id: 'c', text: 'Непомітно збирає інформацію' }
            ],
            answers: ['b', 'c', 'a']
        },
        {
            type: 'match-columns',
            theme: 'network',
            question: 'Зіставте інструмент та його роль.',
            leftItems: ['Firewall', 'IDS', 'VPN'],
            rightItems: [
                { id: 'a', text: 'Шифроване зєднання через публічну мережу' },
                { id: 'b', text: 'Виявлення підозрілої активності' },
                { id: 'c', text: 'Фільтрація трафіку за правилами' }
            ],
            answers: ['c', 'b', 'a']
        },
        {
            type: 'match-columns',
            theme: 'cloud',
            question: 'Зіставте хмарний термін і зміст.',
            leftItems: ['Shared responsibility', 'IAM role', 'Security group'],
            rightItems: [
                { id: 'a', text: 'Логічний мережевий фільтр' },
                { id: 'b', text: 'Розподіл відповідальності за безпеку' },
                { id: 'c', text: 'Набір дозволів для сутності' }
            ],
            answers: ['b', 'c', 'a']
        },
        {
            type: 'match-columns',
            theme: 'incident',
            question: 'Зіставте фазу IR та зміст.',
            leftItems: ['Containment', 'Eradication', 'Recovery'],
            rightItems: [
                { id: 'a', text: 'Відновлення сервісів та контроль стабільності' },
                { id: 'b', text: 'Ізоляція інциденту від поширення' },
                { id: 'c', text: 'Видалення причини та шкідливих артефактів' }
            ],
            answers: ['b', 'c', 'a']
        },
        {
            type: 'match-columns',
            theme: 'risk',
            question: 'Зіставте термін ризику і визначення.',
            leftItems: ['Threat', 'Vulnerability', 'Impact'],
            rightItems: [
                { id: 'a', text: 'Слабке місце, яке можна експлуатувати' },
                { id: 'b', text: 'Потенційна шкода від реалізованої загрози' },
                { id: 'c', text: 'Потенційна причина небажаної події' }
            ],
            answers: ['c', 'a', 'b']
        },
        {
            type: 'match-columns',
            theme: 'finance',
            question: 'Зіставте термін і значення.',
            leftItems: ['Carding', 'Rug pull', 'Money mule'],
            rightItems: [
                { id: 'a', text: 'Особа для транзиту/відмивання коштів' },
                { id: 'b', text: 'Шахрайські операції з реквізитами карт' },
                { id: 'c', text: 'Виведення ліквідності з криптопроєкту' }
            ],
            answers: ['b', 'c', 'a']
        },
        {
            type: 'match-columns',
            theme: 'law',
            question: 'Зіставте термін і суть.',
            leftItems: ['Responsible disclosure', 'Scope', 'Consent'],
            rightItems: [
                { id: 'a', text: 'Межі дозволеного тестування' },
                { id: 'b', text: 'Добровільна згода на дії' },
                { id: 'c', text: 'Контрольоване повідомлення про вразливість' }
            ],
            answers: ['c', 'a', 'b']
        },
        {
            type: 'match-columns',
            theme: 'backup',
            question: 'Зіставте підхід backup і призначення.',
            leftItems: ['3-2-1', 'Immutable backup', 'Recovery test'],
            rightItems: [
                { id: 'a', text: 'Регулярна перевірка відновлення' },
                { id: 'b', text: 'Копія, що не може бути змінена' },
                { id: 'c', text: 'Три копії, два носії, одна офсайт' }
            ],
            answers: ['c', 'b', 'a']
        },
        {
            type: 'match-columns',
            theme: 'zero_trust',
            question: 'Зіставте принцип Zero Trust і пояснення.',
            leftItems: ['Least privilege', 'Continuous verification', 'Micro-segmentation'],
            rightItems: [
                { id: 'a', text: 'Перевірка доступу на кожному кроці' },
                { id: 'b', text: 'Мінімально необхідні дозволи' },
                { id: 'c', text: 'Поділ мережі на малі зони' }
            ],
            answers: ['b', 'a', 'c']
        },
        {
            type: 'match-columns',
            theme: 'attack_models',
            question: 'Зіставте модель і її фокус.',
            leftItems: ['Kill Chain', 'MITRE ATT&CK', 'STRIDE'],
            rightItems: [
                { id: 'a', text: 'Категорії загроз у дизайні систем' },
                { id: 'b', text: 'Тактики/техніки поведінки зловмисника' },
                { id: 'c', text: 'Етапи розвитку атаки' }
            ],
            answers: ['c', 'b', 'a']
        },
        {
            type: 'match-columns',
            theme: 'stride',
            question: 'Зіставте STRIDE-термін і його суть.',
            leftItems: ['Spoofing', 'Tampering', 'Repudiation'],
            rightItems: [
                { id: 'a', text: 'Підміна особи/ідентичності' },
                { id: 'b', text: 'Заперечення факту дій' },
                { id: 'c', text: 'Несанкціонована модифікація даних' }
            ],
            answers: ['a', 'c', 'b']
        },
        {
            type: 'match-columns',
            theme: 'mitre',
            question: 'Зіставте тактику ATT&CK і мету.',
            leftItems: ['Initial Access', 'Credential Access', 'Exfiltration'],
            rightItems: [
                { id: 'a', text: 'Отримання облікових даних' },
                { id: 'b', text: 'Початкове проникнення' },
                { id: 'c', text: 'Виведення даних назовні' }
            ],
            answers: ['b', 'a', 'c']
        },
        {
            type: 'match-columns',
            theme: 'kill_chain',
            question: 'Зіставте етап Kill Chain та дію.',
            leftItems: ['Reconnaissance', 'Delivery', 'Actions on Objectives'],
            rightItems: [
                { id: 'a', text: 'Досягнення цілі атаки' },
                { id: 'b', text: 'Доставка шкідливого навантаження' },
                { id: 'c', text: 'Збір даних про ціль' }
            ],
            answers: ['c', 'b', 'a']
        },
        {
            type: 'match-columns',
            theme: 'identity',
            question: 'Зіставте термін IAM та значення.',
            leftItems: ['Authentication', 'Authorization', 'Account lifecycle'],
            rightItems: [
                { id: 'a', text: 'Керування створенням/видаленням акаунтів' },
                { id: 'b', text: 'Підтвердження особи' },
                { id: 'c', text: 'Надання прав доступу' }
            ],
            answers: ['b', 'c', 'a']
        },
        {
            type: 'match-columns',
            theme: 'email_security',
            question: 'Зіставте поштовий механізм та функцію.',
            leftItems: ['SPF', 'DKIM', 'DMARC'],
            rightItems: [
                { id: 'a', text: 'Політика обробки невалідної пошти' },
                { id: 'b', text: 'Перевірка дозволених серверів відправника' },
                { id: 'c', text: 'Криптографічний підпис листа' }
            ],
            answers: ['b', 'c', 'a']
        },
        {
            type: 'match-columns',
            theme: 'browser_security',
            question: 'Зіставте поняття браузерної безпеки.',
            leftItems: ['HTTPS', 'Homograph', 'Certificate warning'],
            rightItems: [
                { id: 'a', text: 'Сигнал про проблеми довіри до сайту' },
                { id: 'b', text: 'Захищений протокол з TLS' },
                { id: 'c', text: 'Підміна домену схожими символами' }
            ],
            answers: ['b', 'c', 'a']
        },
        {
            type: 'match-columns',
            theme: 'api_security',
            question: 'Зіставте контроль API та призначення.',
            leftItems: ['Rate limiting', 'Input validation', 'Token auth'],
            rightItems: [
                { id: 'a', text: 'Перевірка коректності вхідних даних' },
                { id: 'b', text: 'Обмеження частоти запитів' },
                { id: 'c', text: 'Перевірка прав клієнта за токеном' }
            ],
            answers: ['b', 'a', 'c']
        },
        {
            type: 'match-columns',
            theme: 'forensics',
            question: 'Зіставте forensic-артефакт і роль.',
            leftItems: ['Log file', 'Memory dump', 'Hash value'],
            rightItems: [
                { id: 'a', text: 'Перевірка цілісності доказу' },
                { id: 'b', text: 'Стан процесів і пам\'яті на момент інциденту' },
                { id: 'c', text: 'Хронологія подій у системі' }
            ],
            answers: ['c', 'b', 'a']
        }
    ],
    mapping: [
        {
            type: 'mapping',
            theme: 'phishing',
            question: 'Встановіть відповідність: 1-а 2-б 3-в.',
            numberedItems: ['1. Spear phishing', '2. Whaling', '3. Clone phishing'],
            letteredItems: [
                { id: 'a', text: 'Атака на топ-менеджмент' },
                { id: 'b', text: 'Цільовий фішинг по конкретній особі' },
                { id: 'c', text: 'Підробка відомого листа з заміною посилання' }
            ],
            answers: ['b', 'a', 'c']
        },
        {
            type: 'mapping',
            theme: 'mfa',
            question: 'Встановіть відповідність факторів.',
            numberedItems: ['1. Password', '2. OTP token', '3. Fingerprint'],
            letteredItems: [
                { id: 'a', text: 'Щось, чим ви є' },
                { id: 'b', text: 'Щось, що ви знаєте' },
                { id: 'c', text: 'Щось, що ви маєте' }
            ],
            answers: ['b', 'c', 'a']
        },
        {
            type: 'mapping',
            theme: 'malware',
            question: 'Встановіть відповідність типів malware.',
            numberedItems: ['1. Worm', '2. Trojan', '3. Spyware'],
            letteredItems: [
                { id: 'a', text: 'Саморозповсюджується мережею' },
                { id: 'b', text: 'Маскується під корисне ПЗ' },
                { id: 'c', text: 'Потай збирає дані' }
            ],
            answers: ['a', 'b', 'c']
        },
        {
            type: 'mapping',
            theme: 'network',
            question: 'Встановіть відповідність мережевих понять.',
            numberedItems: ['1. Segmentation', '2. IDS', '3. WAF'],
            letteredItems: [
                { id: 'a', text: 'Захист веб-додатків на рівні HTTP' },
                { id: 'b', text: 'Розділення мережі на ізольовані зони' },
                { id: 'c', text: 'Виявлення підозрілої активності' }
            ],
            answers: ['b', 'c', 'a']
        },
        {
            type: 'mapping',
            theme: 'cloud',
            question: 'Встановіть відповідність хмарних обовязків.',
            numberedItems: ['1. Cloud provider', '2. Customer', '3. Joint controls'],
            letteredItems: [
                { id: 'a', text: 'Налаштування доступів та даних' },
                { id: 'b', text: 'Фізична безпека датацентру' },
                { id: 'c', text: 'Деякі аспекти конфігурацій безпеки' }
            ],
            answers: ['b', 'a', 'c']
        },
        {
            type: 'mapping',
            theme: 'incident',
            question: 'Встановіть відповідність етапів IR.',
            numberedItems: ['1. Detection', '2. Containment', '3. Recovery'],
            letteredItems: [
                { id: 'a', text: 'Ізоляція уражених систем' },
                { id: 'b', text: 'Повернення сервісу в робочий стан' },
                { id: 'c', text: 'Виявлення та підтвердження інциденту' }
            ],
            answers: ['c', 'a', 'b']
        },
        {
            type: 'mapping',
            theme: 'risk',
            question: 'Встановіть відповідність ризик-термінів.',
            numberedItems: ['1. Asset', '2. Threat', '3. Vulnerability'],
            letteredItems: [
                { id: 'a', text: 'Цінний ресурс для організації' },
                { id: 'b', text: 'Слабке місце системи' },
                { id: 'c', text: 'Потенційна причина шкоди' }
            ],
            answers: ['a', 'c', 'b']
        },
        {
            type: 'mapping',
            theme: 'finance',
            question: 'Встановіть відповідність фінансових схем.',
            numberedItems: ['1. Carding', '2. Fake ICO', '3. Mule account'],
            letteredItems: [
                { id: 'a', text: 'Підставний рахунок для транзиту коштів' },
                { id: 'b', text: 'Псевдоінвестпроєкт з обманом' },
                { id: 'c', text: 'Незаконні операції з платіжними картами' }
            ],
            answers: ['c', 'b', 'a']
        },
        {
            type: 'mapping',
            theme: 'law',
            question: 'Встановіть відповідність правових термінів.',
            numberedItems: ['1. Authorization', '2. Compliance', '3. Liability'],
            letteredItems: [
                { id: 'a', text: 'Відповідальність за порушення' },
                { id: 'b', text: 'Дотримання норм і вимог' },
                { id: 'c', text: 'Офіційний дозвіл на дії' }
            ],
            answers: ['c', 'b', 'a']
        },
        {
            type: 'mapping',
            theme: 'backup',
            question: 'Встановіть відповідність резервування.',
            numberedItems: ['1. Full backup', '2. Incremental backup', '3. Restore test'],
            letteredItems: [
                { id: 'a', text: 'Перевірка реального відновлення' },
                { id: 'b', text: 'Лише зміни з останнього backup' },
                { id: 'c', text: 'Повна копія вибраних даних' }
            ],
            answers: ['c', 'b', 'a']
        },
        {
            type: 'mapping',
            theme: 'zero_trust',
            question: 'Встановіть відповідність принципів Zero Trust.',
            numberedItems: ['1. Verify explicitly', '2. Least privilege', '3. Assume breach'],
            letteredItems: [
                { id: 'a', text: 'Працювати так, ніби компрометація вже можлива' },
                { id: 'b', text: 'Надавати лише мінімальний доступ' },
                { id: 'c', text: 'Перевіряти кожен запит на доступ' }
            ],
            answers: ['c', 'b', 'a']
        },
        {
            type: 'mapping',
            theme: 'attack_models',
            question: 'Встановіть відповідність моделі та призначення.',
            numberedItems: ['1. Kill Chain', '2. MITRE ATT&CK', '3. STRIDE'],
            letteredItems: [
                { id: 'a', text: 'Моделювання категорій загроз у системі' },
                { id: 'b', text: 'Опис тактик і технік зловмисника' },
                { id: 'c', text: 'Опис послідовних етапів атаки' }
            ],
            answers: ['c', 'b', 'a']
        },
        {
            type: 'mapping',
            theme: 'stride',
            question: 'Встановіть відповідність STRIDE-понять.',
            numberedItems: ['1. Spoofing', '2. Information disclosure', '3. Denial of service'],
            letteredItems: [
                { id: 'a', text: 'Відмова в обслуговуванні' },
                { id: 'b', text: 'Розкриття конфіденційних даних' },
                { id: 'c', text: 'Підміна особи' }
            ],
            answers: ['c', 'b', 'a']
        },
        {
            type: 'mapping',
            theme: 'mitre',
            question: 'Встановіть відповідність ATT&CK тактик.',
            numberedItems: ['1. Persistence', '2. Lateral Movement', '3. Exfiltration'],
            letteredItems: [
                { id: 'a', text: 'Переміщення між вузлами мережі' },
                { id: 'b', text: 'Закріплення в системі' },
                { id: 'c', text: 'Вивід даних з інфраструктури' }
            ],
            answers: ['b', 'a', 'c']
        },
        {
            type: 'mapping',
            theme: 'kill_chain',
            question: 'Встановіть відповідність етапів Kill Chain.',
            numberedItems: ['1. Weaponization', '2. Delivery', '3. Installation'],
            letteredItems: [
                { id: 'a', text: 'Передача шкідливого обєкта цілі' },
                { id: 'b', text: 'Підготовка шкідливого інструмента' },
                { id: 'c', text: 'Закріплення шкідливого коду у системі' }
            ],
            answers: ['b', 'a', 'c']
        },
        {
            type: 'mapping',
            theme: 'identity',
            question: 'Встановіть відповідність IAM-процесів.',
            numberedItems: ['1. Provisioning', '2. Deprovisioning', '3. Access review'],
            letteredItems: [
                { id: 'a', text: 'Регулярна перевірка актуальності прав' },
                { id: 'b', text: 'Надання доступу новому користувачу' },
                { id: 'c', text: 'Відкликання доступів' }
            ],
            answers: ['b', 'c', 'a']
        },
        {
            type: 'mapping',
            theme: 'email_security',
            question: 'Встановіть відповідність поштових протоколів захисту.',
            numberedItems: ['1. SPF', '2. DKIM', '3. DMARC'],
            letteredItems: [
                { id: 'a', text: 'Політика обробки неавтентичних листів' },
                { id: 'b', text: 'Список дозволених серверів відправника' },
                { id: 'c', text: 'Підпис вмісту листа доменом' }
            ],
            answers: ['b', 'c', 'a']
        },
        {
            type: 'mapping',
            theme: 'browser_security',
            question: 'Встановіть відповідність браузерних ризиків.',
            numberedItems: ['1. Homograph URL', '2. Malicious extension', '3. Mixed content'],
            letteredItems: [
                { id: 'a', text: 'Небезпечний плагін браузера' },
                { id: 'b', text: 'Схожий фальшивий домен' },
                { id: 'c', text: 'Поєднання HTTP і HTTPS на сторінці' }
            ],
            answers: ['b', 'a', 'c']
        },
        {
            type: 'mapping',
            theme: 'api_security',
            question: 'Встановіть відповідність API-контролів.',
            numberedItems: ['1. Authentication', '2. Authorization', '3. Rate limiting'],
            letteredItems: [
                { id: 'a', text: 'Обмеження кількості запитів' },
                { id: 'b', text: 'Перевірка прав на дію' },
                { id: 'c', text: 'Підтвердження особи клієнта' }
            ],
            answers: ['c', 'b', 'a']
        },
        {
            type: 'mapping',
            theme: 'forensics',
            question: 'Встановіть відповідність forensic-практик.',
            numberedItems: ['1. Timeline analysis', '2. Evidence hashing', '3. Chain of custody'],
            letteredItems: [
                { id: 'a', text: 'Фіксація передачі та зберігання доказу' },
                { id: 'b', text: 'Контроль цілісності артефакту' },
                { id: 'c', text: 'Відтворення послідовності подій' }
            ],
            answers: ['c', 'b', 'a']
        }
    ],
    text: [
        {
            type: 'text',
            theme: 'phishing',
            question: 'Введіть англійський термін для шахрайства через email.',
            acceptedAnswers: ['phishing']
        },
        {
            type: 'text',
            theme: 'mfa',
            question: 'Введіть абревіатуру багатофакторної автентифікації.',
            acceptedAnswers: ['mfa']
        },
        {
            type: 'text',
            theme: 'malware',
            question: 'Введіть назву атаки, що шифрує файли і вимагає викуп.',
            acceptedAnswers: ['ransomware']
        },
        {
            type: 'text',
            theme: 'network',
            question: 'Введіть абревіатуру віртуальної приватної мережі.',
            acceptedAnswers: ['vpn']
        },
        {
            type: 'text',
            theme: 'cloud',
            question: 'Введіть 3-літерну абревіатуру керування доступом та ідентичностями.',
            acceptedAnswers: ['iam']
        },
        {
            type: 'text',
            theme: 'incident',
            question: 'Введіть термін для ізоляції інциденту на етапі реагування.',
            acceptedAnswers: ['containment']
        },
        {
            type: 'text',
            theme: 'risk',
            question: 'Введіть 4-літерний стандарт оцінки критичності вразливості.',
            acceptedAnswers: ['cvss']
        },
        {
            type: 'text',
            theme: 'finance',
            question: 'Введіть термін для фішингу через SMS.',
            acceptedAnswers: ['smishing']
        },
        {
            type: 'text',
            theme: 'law',
            question: 'Введіть англійський термін для контрольованого розкриття вразливості.',
            acceptedAnswers: ['responsible disclosure']
        },
        {
            type: 'text',
            theme: 'backup',
            question: 'Введіть цифрами стратегію резервування: три копії, два носії, одна офсайт.',
            acceptedAnswers: ['3-2-1', '321']
        },
        {
            type: 'text',
            theme: 'zero_trust',
            question: 'Введіть другу частину принципу: Never trust, always ...',
            acceptedAnswers: ['verify']
        },
        {
            type: 'text',
            theme: 'attack_models',
            question: 'Введіть назву моделі з етапами атаки: Cyber ... Chain',
            acceptedAnswers: ['kill', 'kill chain']
        },
        {
            type: 'text',
            theme: 'stride',
            question: 'Введіть літеру S з розшифровки STRIDE (англійський термін).',
            acceptedAnswers: ['spoofing']
        },
        {
            type: 'text',
            theme: 'mitre',
            question: 'Введіть прізвище в назві бази ATT&CK: MITRE ...',
            acceptedAnswers: ['att&ck', 'attack']
        },
        {
            type: 'text',
            theme: 'kill_chain',
            question: 'Введіть етап Kill Chain, що означає доставку payload (англійською).',
            acceptedAnswers: ['delivery']
        },
        {
            type: 'text',
            theme: 'identity',
            question: 'Введіть абревіатуру керування ідентичністю і доступом.',
            acceptedAnswers: ['iam']
        },
        {
            type: 'text',
            theme: 'email_security',
            question: 'Введіть 5-літерну абревіатуру політики доменної валідації пошти.',
            acceptedAnswers: ['dmarc']
        },
        {
            type: 'text',
            theme: 'browser_security',
            question: 'Введіть абревіатуру захищеного веб-протоколу.',
            acceptedAnswers: ['https']
        },
        {
            type: 'text',
            theme: 'api_security',
            question: 'Введіть механізм обмеження кількості запитів до API (англійською, 2 слова).',
            acceptedAnswers: ['rate limiting']
        },
        {
            type: 'text',
            theme: 'forensics',
            question: 'Введіть англійський термін для цифрової криміналістики (1 слово).',
            acceptedAnswers: ['forensics']
        }
    ]
};

function getQuestionsByTestType(testTypeId) {
    return QUIZ_QUESTIONS_BY_TYPE[testTypeId] || [];
}

function getThemeLabelsForTestType(testTypeId) {
    const questions = getQuestionsByTestType(testTypeId);
    const uniqueThemes = Array.from(new Set(questions.map(function (q) { return q.theme; })));

    return uniqueThemes.map(function (themeId) {
        return {
            id: themeId,
            label: THEME_LABELS[themeId] || themeId
        };
    });
}

function getThemeLabel(themeId) {
    return THEME_LABELS[themeId] || 'Тема';
}
