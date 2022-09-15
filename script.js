const form = document.querySelector('form');
const inputs = document.querySelectorAll('.form_input');
const go_test_btn = document.querySelector('.go_test');
const form_body = document.querySelector('.form_body');
const form_image = document.querySelector('.form_image');
const form_name = document.querySelector('.form_name');
const questions_block = document.querySelector('.questions');
const grey_block = document.querySelector('.instruction');
const answers = ['A', 'A', 'B', 'A', 'A', 'B', 'B', 'A', 'B', 'B', 'A', 'A', 'A', 'B', 'B', 'A', 'B', 'A', 'B', 'B', 'A', 'A', 'B', 'A', 'B', 'B', 'A', 'A', 'A', 'A'];

const questions = [
    {
        1: 'Я постараюсь отнестись к исследованию ответственно и быть максимально искренним.',
        2: 'В настоящий момент я не готов пройти данное тестирование, перенесу его на потом.'
    },
    {
        1: 'Мне легко устанавливать новые социальные контакты с ранее не знакомыми людьми.',
        2: 'Мне трудно преодолеть застенчивость, когда нужно говорить перед группой людей.'
    },
    {
        1: 'Для меня важно иметь общее мнение с теми людьми, с которыми я обычно общаюсь.',
        2: 'Мое мнение правильное и никто не может навязывать мне свое мнение.'
    },
    {
        1: 'Решая серьезные проблемы, я, как правило, обхожусь без посторонней помощи.',
        2: 'Я часто стараюсь следовать советам более «авторитетной» личности.'
    },
    {
        1: 'Если будет нужно, я разрушу все преграды на пути к достижению цели.',
        2: 'Я стараюсь быть таким «как все», не выделяться среди других.'
    },
    {
        1: 'Для меня важно работать в команде, быть ее частью.',
        2: 'Я никогда никого не обманывал.'
    },
    {
        1: 'Я очень редко заговариваю первым с незнакомыми людьми.',
        2: 'В поездках я с удовольствием провожу время в беседе с попутчиками.'
    },
    {
        1: 'Я никогда не откладываю на завтра то, что следовало сделать сегодня.',
        2: 'Для меня очень важно, что думают обо мне окружающие.'
    },
    {
        1: 'Ради сохранения добрых отношений с окружающими я могу отказаться от своих намерений.',
        2: 'Меня раздражают люди, пытающиеся изменить мое мнение, когда я уверен в собственной правоте.'
    },
    {
        1: 'Я легко отвлекаюсь от выполняемой работы и переключаюсь на новые задания, часто не завершив предыдущее.',
        2: 'В делах у меня должно быть все планомерно, точно и аккуратно.'
    },
    {
        1: 'Я некогда не испытываю желания выругаться.',
        2: 'Я склонен очень переживать, если кого-то задел или обидел.'
    },
    {
        1: 'Оказавшись в новой компании мне всегда приятно заводить новых знакомых.',
        2: 'В компании окружающих, я чаще всего - в роли только наблюдателя.'
    },
    {
        1: 'Я могу взять на себя ответственность за целую группу людей для пользы дела.',
        2: 'Мне проще надеяться на других, чем брать на себя ответственность, даже если речь идет о моих проблемах.'
    },
    {
        1: 'Мне часто бывает скучно, когда вокруг все веселятся.',
        2: 'Меня любят все мои друзья.'
    },
    {
        1: 'Я испытываю чувства вины или тревоги, если меня преследуют неудачи.',
        2: 'Я умею дать отпор тем, кто вмешивается в мои дела.'
    },
    {
        1: 'В жизни я твердо придерживаюсь определенных принципов.',
        2: 'Если в компании я не нахожусь в центре внимания, мне становится скучно и не интересно. '
    },
    {
        1: 'Я могу изменить свое мнение под давлением окружающих.',
        2: 'Принимая важное решение, я всегда действую самостоятельно.'
    },
    {
        1: 'Берясь за какое-нибудь дело, я не стану долго раздумывать, прежде чем начать действовать.',
        2: 'Прежде чем выполнять важное поручение, мне необходимо посоветоваться со значимым для меня человеком и все хорошо обдумать.'
    },
    {
        1: 'Люблю посещать компании, где можно хорошо повеселиться.',
        2: 'Я никогда не поступаю как эгоист.'
    },
    {
        1: 'Я умею привлекать к себе внимание окружающих меня людей.',
        2: 'Я добиваюсь своего за счет упорства и настойчивости.'
    },
    {
        1: 'Мне не трудно заставить других людей действовать так, как я считаю необходимым.',
        2: 'Я никогда не сержусь.'
    },
    {
        1: 'Я всегда бываю упрям в тех случаях, когда уверен в своей правоте.',
        2: 'Я всегда придерживаюсь общепринятых правил поведения.'
    },
    {
        1: 'Для меня важно придерживаться, установленных социальных норм и правил, чтобы не создавать конфликтных ситуаций.',
        2: 'Мне нередко приходилось в конфликте защищать свои права.'
    },
    {
        1: 'Я – человек абсолютно правдивый и искренний.',
        2: 'Я умею заинтересовать людей и повести их за собой.'
    },
    {
        1: 'Я люблю одиночество, позволяющее мне сосредоточиться на своих мыслях.',
        2: 'Мне нравится путешествовать с разными, каждый раз новыми попутчиками.'
    },
    {
        1: 'Мое настроение находится в сильной зависимости от настроя тех, кто меня окружает.',
        2: 'Мне не важно мнение других, если нужно решить мои проблемы.'
    },
    {
        1: 'Мене нравится проводить время в шумных кампаниях.',
        2: 'Когда меня зовут в гости, я неохотно соглашаюсь, думая, что лучше остаться дома.'
    },
    {
        1: 'Мнение старших по возрасту или положению большого значения для меня не имеет.',
        2: 'Мне бывало неловко за высказывания и поступки моих близких.'
    },
    {
        1: 'Мне нравиться командовать другими.',
        2: 'Я предпочитаю быть хорошим исполнителем, руководить другими, это не для меня.'
    },
    {
        1: 'Я отвечал на все вопросы очень правдиво.',
        2: 'Я отвечал на вопросы с позиции социального одобрения (обманывал).'
    },
]

go_test_btn.addEventListener('click', startCheckingTest);

function countBalls(arr, num) {
    return arr[num - 1] === answers[num - 1] ? 1 : 0;
}

function startCheckingTest() {
    let arr = [];
    inputs.forEach(inp => {
        arr.push(inp.value);
    })
    let isGoingTest = arr.includes('');
    if (!isGoingTest) test();
}

function test() {
    form_body.style.display = 'none';
    form_image.style.display = 'none';
    form_name.innerHTML = `Данные успешно заполнены!`;
    document.querySelector('.form_name2').innerHTML = 'Пройдите короткий тест для отправки заявки';
    grey_block.classList.remove('hidden');
    document.querySelector('.instruction-head').innerHTML = 'Инструкция к прохождению теста';
    document.querySelector('.instruction-body').innerHTML = 'Вам предлагаются попарно утверждения, описывающие индивидуальные типологические особенности личности; оцените их по степени значимости для Вас и выберите одно из них, которое в большей степени характеризует Вас. На против своего выбора, поставьте галочку, что будет означать ответ – «Да» (Согласен). Отвечать рекомендуется быстро, особо не задумываясь. Время для прохождения теста 12 минут.';

    createQuestions();
}

function createQuestions() {
    for (let i=0;i<questions.length;i++) {
        const div = document.createElement('div');
        const text = document.createElement('p');
        text.innerHTML = `Вопрос ${i+1}`;

        const question_1 = document.createElement('input');
        question_1.setAttribute('required', '')
        question_1.value = 'A';
        question_1.type = 'radio';
        question_1.id = `que-${i}-1`;
        question_1.name = `que-${i}`;
        const question_1_label = document.createElement('label');
        question_1_label.for = `que-${i}-1`
        question_1_label.innerHTML = questions[i][1];

        const question_1_block = document.createElement('div');
        question_1_block.appendChild(question_1);
        question_1_block.appendChild(question_1_label);

        const question_2 = document.createElement('input');
        question_2.value = 'B';
        question_2.type = 'radio';
        question_2.id = `que-${i}-2`;
        question_2.name = `que-${i}`;
        const question_2_label = document.createElement('label');
        question_2_label.for = `que-${i}-2`;
        question_2_label.innerHTML = questions[i][2];

        const question_2_block = document.createElement('div');
        question_2_block.appendChild(question_2);
        question_2_block.appendChild(question_2_label);

        div.classList.add('questions-block');
        text.classList.add('questions-number');
        question_1_block.classList.add('question');
        question_2_block.classList.add('question');
        question_1.classList.add('questions-inp');
        question_2.classList.add('questions-inp');
        question_1_label.classList.add('questions-label');
        question_2_label.classList.add('questions-label');

        div.appendChild(text);
        div.appendChild(question_1_block);
        div.appendChild(question_2_block);

        questions_block.appendChild(div);
    }

    setTimeout(() => {
        go_test_btn.type = 'button';
        go_test_btn.removeEventListener('click', startCheckingTest);
        go_test_btn.addEventListener('click', () => {
            const que_inp = document.querySelectorAll('.questions-inp');
            let answers_arr = [];
            que_inp.forEach(input => {
                if (input.checked) 
                answers_arr.push(input.value)
            })
            if (answers_arr.length === 30) {
                const eks = countBalls(answers_arr, 2) + countBalls(answers_arr, 7) + countBalls(answers_arr, 12) + countBalls(answers_arr, 19) + countBalls(answers_arr, 25) + countBalls(answers_arr, 27)
                const rig = countBalls(answers_arr, 3) + countBalls(answers_arr, 22) + countBalls(answers_arr, 10) + countBalls(answers_arr, 16) + countBalls(answers_arr, 20) + countBalls(answers_arr, 26)
                const spon = countBalls(answers_arr, 4) + countBalls(answers_arr, 24) + countBalls(answers_arr, 13) + countBalls(answers_arr, 17) + countBalls(answers_arr, 18) + countBalls(answers_arr, 29)
                const agr = countBalls(answers_arr, 5) + countBalls(answers_arr, 9) + countBalls(answers_arr, 21) + countBalls(answers_arr, 15) + countBalls(answers_arr, 23) + countBalls(answers_arr, 28)
                const lie = countBalls(answers_arr, 6) + countBalls(answers_arr, 19) + countBalls(answers_arr, 8) + countBalls(answers_arr, 21) + countBalls(answers_arr, 11) + countBalls(answers_arr, 22) + countBalls(answers_arr, 14) + countBalls(answers_arr, 24)
                let answers = `Экстраверсия - ${eks}, Ригидность - ${rig}, Спонтанность - ${spon}, Агрессивность - ${agr}, Лож - ${lie}, 1 - ${answers_arr[0]}, 30 - ${answers_arr[29]}`
                document.querySelector('.input_answer').value = `Экстраверсия - ${eks}, Ригидность - ${rig}, Спонтанность - ${spon}, Агрессивность - ${agr}, Лож - ${lie}, 1 - ${answers_arr[0]}, 30 - ${answers_arr[29]}`;
                setTimeout(() => {
                    form.submit();
                }, 1000);
            } else {
                throw new Error('Answer all questions');
            }
        })
    }, 1000)
}
