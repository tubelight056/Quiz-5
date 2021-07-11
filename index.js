

function Quiz(){
    
    let questions = [
        {
        id: 1,
        question: 'What does HTML stands for?',
        a:
            'Hypertext Markup Language.',
        b: 'Highlevel Text Markup language.',
        c:
            "Hypertag Markup Language.",
        d: 'All of the above',
        correct_answer: 'a',
        },
        {
        id: 2,
        question: 'Which one is not a Hook?',
        a: 'useState()',
        b: 'useConst()',
        c: 'useReducer()',
        d: 'All of the above',
        correct_answer: 'b',
        },
        {
        id: 3,
        question: 'What Hook should be used for data fetching?',
        a: 'useDataFetching()',
        b: 'useApi()',
        c: 'useEffect()',
        d: 'useRequest()',
        correct_answer: 'c',
        },
        {
        id: 4,
        question: 'What does css stands for?',
        a: 'Cascading styling sheet',
        b: 'Coding Styling sheet',
        c: 'Cheetsheet Style',
        d: 'All of the above',
        correct_answer: 'a',
        },
        {
        id: 5,
        question: 'Which one is used for constructing the structure?',
        a: 'HTML',
        b: 'CSS',
        c: 'Javascript',
        d: 'All of the above',
        correct_answer: 'a',
        }
    ];
    let questionid=0,score=0;
    let createinterval;
    let questionQuery=document.querySelector(".question");
    let aQuery=document.querySelector(".a");
    const bQuery=document.querySelector(".b");
    const btnQuery=document.querySelector(".next");
    const cQuery=document.querySelector(".c");
    const dQuery=document.querySelector(".d");
    const questionCountQuery=document.querySelector('.questioncount');
    this.getQuestion=()=>{
        if(questionid<5){
                if(questionid>0){
                    this.hideAnwser(questions[questionid-1].correct_answer);
                    btnQuery.innerHTML="Next";
                }
                this.setQuestion(questions[questionid]);
                if(createinterval){
                    clearInterval(createinterval);
                }
                 let time=0

                createinterval=setInterval(() => {
                    
                    document.querySelector('.timecount').innerHTML=time;
                    time=time+1;
                    if(time>=16){
                        this.clicked('z');
                    }
                }, 1000);
                questionCountQuery.innerHTML=`${questionid+1} out of 5`;
                questionid=questionid+1;
                if(questionid>4){
                    btnQuery.innerHTML="Submit";
                }
            }
            else{
                this.hideAnwser(questions[questionid-1].correct_answer);
                questionQuery.innerHTML=`Your score is ${score}`;
                aQuery.innerHTML="";
                bQuery.innerHTML="";
                cQuery.innerHTML="";
                dQuery.innerHTML="";       
                btnQuery.style="display:none";
                document.querySelector('.timecount').innerHTML=0;
                if(createinterval){
                    clearInterval(createinterval);
                } 
            }
    },
    this.setQuestion=({id,question,a,b,c,d,correct_answer})=>{
        questionQuery.innerHTML=`${id}. ${question}`;
        aQuery.innerHTML=`a.${a}`;
        bQuery.innerHTML=`b.${b}`;
        cQuery.innerHTML=`c.${c}`;
        dQuery.innerHTML=`d.${d}`;
    },
    this.showAnwser=()=>{
        aQuery.classList.add("wronganwser");
        bQuery.classList.add("wronganwser");
        cQuery.classList.add("wronganwser");
        dQuery.classList.add("wronganwser");
        document.querySelector(`.${questions[questionid-1].correct_answer}`).classList.add("correctanwser");
    },
    this.hideAnwser=(correct_answer)=>{
        aQuery.classList.remove("wronganwser");
        bQuery.classList.remove("wronganwser");
        cQuery.classList.remove("wronganwser");
        dQuery.classList.remove("wronganwser");
        document.querySelector(`.${correct_answer}`).classList.remove("correctanwser");
    }
    this.clicked=(clas)=>{
        
        if(questionid<5 && questions[questionid-1].correct_answer==clas){
            score=score+1;
        }
        this.showAnwser();
        clearInterval(createinterval);
    }

}
const quiz =new Quiz();



