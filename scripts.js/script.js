// console.log("Connected")
// Store Data By Filtering
let interviewList = []
let rejectedList = []

// step 1 : get the counting id
let totalCount =document.getElementById('total')
let interviewCount =document.getElementById('interview')
let rejectedCount =document.getElementById('rejected');
let allJobsCount = document.getElementById('all-jobs');
let filteredJobsCount = document.getElementById('filtered-jobs')
//  get all filter Button id

let allFilterBtn =document.getElementById('all-filter-btn')
let interviewFilterBtn =document.getElementById('Interview-filter-btn')
let rejectedFilterBtn =document.getElementById('rejected-filter-btn')

// get section id

let allCardSection = document.getElementById('all-cards');
let filterSection =document.getElementById('filtered-section')
let mainContainer = document.querySelector('main')

// function for calculate Count

function calculateCount(){
    totalCount.innerText = allCardSection.children.length;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;

    allJobsCount.innerText = allCardSection.children.length;
    

    
}



// call the function
calculateCount()


// step 2 Function for Button

function toggleStyle(id){

    allFilterBtn.classList.add('shadow','text-blue-900')
    interviewFilterBtn.classList.add('shadow','text-blue-900');
    rejectedFilterBtn.classList.add('shadow','text-blue-900');

    allFilterBtn.classList.remove('bg-blue-500','text-white')
    interviewFilterBtn.classList.remove('bg-blue-500','text-white')
    rejectedFilterBtn.classList.remove('bg-blue-500','text-white')

    const selected =document.getElementById(id);

    selected.classList.remove('shadow','text-blue-900');
    selected.classList.add('bg-blue-500','text-white')


    

    if(id == 'Interview-filter-btn'){
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden')
        renderInterview();

        filteredJobsCount.innerText = interviewList.length;

    }
    else if(id == 'all-filter-btn'){
        allCardSection.classList.remove('hidden');
        filterSection.classList.add('hidden')
    }
    else if(id === 'rejected-filter-btn'){
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden');
        renderRejected();
        filteredJobsCount.innerText = rejectedList.length;

    }
}

// delegation
mainContainer.addEventListener('click', function(event){
    let parentNode = event.target.closest('.card');
    if(!parentNode) return;

        let jobTitle = parentNode.querySelector('.job-title').innerText;
        let skill = parentNode.querySelector('.skill').innerText;
        let requirement =parentNode.querySelector('.requirement').innerText;
        let status = parentNode.querySelector('.status').innerText;
        let notes =parentNode.querySelector('.notes').innerText;

    // interview Btn
    if(event.target.classList.contains('interview-card-btn')){
        
        interviewList =interviewList.filter(item => item.jobTitle !== jobTitle);
        rejectedList = rejectedList.filter(item => item.jobTitle !== jobTitle);

        // console.log(jobTitle,skill,requirement,status,notes)



        const cardInfo ={
        jobTitle,
        skill,
        requirement,
        status: 'Interview',
        notes
        

        }
    // console.log(cardI


    // const applicationExist =  interviewList.find(item => item.jobTitle === cardInfo.jobTitle);

    

    // if(!applicationExist ){
    //     interviewList.push(cardInfo);
    //     parentNode.querySelector('.status').innerText = 'Interview'
    // }

    interviewList.push(cardInfo);
    parentNode.querySelector('.status').innerText = 'Interview'

    calculateCount()
    renderInterview()
    }


    // Rejected Btn

    if(event.target.classList.contains('rejected-card-btn')){
        interviewList =interviewList.filter(item => item.jobTitle !== jobTitle);
        rejectedList = rejectedList.filter(item => item.jobTitle !== jobTitle);

        const cardInfo ={
        jobTitle,
        skill,
        requirement,
        status: 'Rejected',
        notes
        }

        rejectedList.push(cardInfo);
        parentNode.querySelector('.status').innerText = "Rejected";

        calculateCount()
        renderRejected()
    }
    
    // delete

    if(event.target.closest('.delete')){
        parentNode.remove();

        interviewList =interviewList.filter(item => item.jobTitle !== jobTitle);
        rejectedList = rejectedList.filter(item => item.jobTitle !== jobTitle);
        calculateCount();
        renderInterview();
        renderRejected();



        if(allCardSection.children.length === 0 && filterSection.classList.contains('hidden')){
            allCardSection.innerHTML =`
                <div class="empty flex flex-col items-center justify-center py-20">
                    <img src="./jobs.png" alt="No Interview" class="w-40 h-40 mb-4">
                    <h2 class=" text-blue-900 font-bold text-2xl">No jobs available</h2>
                    <p class="text-gray-500 font-semibold text-xl">Check back soon for new job opportunities</p>
                </div>
            `
        }
        return;
    }
    

})



mainContainer



// render Interview

function renderInterview(){
    // make the filter section empty
    filterSection.innerHTML = '';

    if(interviewList.length === 0){
        filterSection.innerHTML = `
            <div class="empty flex flex-col items-center justify-center py-20">
                <img src="./jobs.png" alt="No Interview" class="w-40 h-40 mb-4">
                <h2 class=" text-blue-900 font-bold text-2xl">No jobs available</h2>
                <p class="text-gray-500 font-semibold text-xl">Check back soon for new job opportunities</p>
            </div>
        `
    }

    // creating innerHtml
    for(let interview of interviewList){
        let div = document.createElement('div');
        div.className ='space-y-10 my-10';
        div.innerHTML=`
            <div class="card  shadow-[0_0_5px_rgba(0,0,0,0.2)] p-8 rounded hover:shadow-xl transition-all duration-500 flex md:flex-row flex-col  justify-between border-l-[5px] border-green-500 ">
                <div class="card-info space-y-5">
                        <!-- part 1 -->
                    <div class="header space-y-2">
                        <h2 class="job-title text-blue-950 font-bold">${interview.jobTitle}</h2>
                        <p class="skill text-gray-500">${interview.skill}</p>
                    </div>
                    <!-- part 2 -->
                    <div class="salary">
                        <p class="text-gray-500 requirement">${interview.requirement}</p>
                    </div>
                    <!-- part 3 -->
                    <div>
                            <span class="  status bg-green-50 py-2 px-7 rounded text-green-900 font-semibold">${interview.status}</span>
                            <p class="notes mt-5">${interview.notes}</p>
                    </div>
                    <!-- part 4 -->

                    <div class="card-btn flex gap-3">
                        <button class="interview-card-btn text-green-400 border rounded py-1 px-2 font-semibold ">Interview</button>
                        <button class="rejected-card-btn text-red-400 border rounded py-1 px-2 font-semibold">Rejected</button>
                    </div>
                </div>
                <!-- delete -->
                <div class="delete text-gray-500
                        inline-flex items-center justify-center
                        w-10 h-10 border border-gray-500 rounded-full shadow-[0_0_10px_rgba(0,0,0,0.2)] hover:text-red-500 hover:shadow-[0_0_15px_rgba(0,0,0,0.4)] transition-all duration-300  cursor-pointer">
                      
                    <i class="fa-solid fa-trash-can"></i>
                </div>
                
                  

            </div>
        `

        filterSection.appendChild(div)
    }

}


// render Rejected

function renderRejected(){
    // make the filter section empty
    filterSection.innerHTML = '';


    if(rejectedList.length === 0){
        filterSection.innerHTML = `
            <div class="empty flex flex-col items-center justify-center py-20">
                <img src="./jobs.png" alt="No Interview" class="w-40 h-40 mb-4">
                <h2 class=" text-blue-900 font-bold text-2xl">No jobs available</h2>
                <p class="text-gray-500 font-semibold text-xl">Check back soon for new job opportunities</p>
            </div>
        `
    }
    // creating innerHtml
    for(let rejected of rejectedList){
        let div = document.createElement('div');
        div.className ='space-y-10 my-10';
        div.innerHTML=`
            <div class="card  shadow-[0_0_5px_rgba(0,0,0,0.2)] p-8 rounded hover:shadow-xl transition-all duration-500 flex md:flex-row flex-col  justify-between border-l-[5px] border-red-500 ">
                <div class="card-info space-y-5">
                        <!-- part 1 -->
                    <div class="header space-y-2">
                        <h2 class="job-title text-blue-950 font-bold">${rejected.jobTitle}</h2>
                        <p class="skill text-gray-500">${rejected.skill}</p>
                    </div>
                    <!-- part 2 -->
                    <div class="salary">
                        <p class="text-gray-500 requirement">${rejected.requirement}</p>
                    </div>
                    <!-- part 3 -->
                    <div>
                            <span class="  status bg-red-50 py-2 px-7 rounded text-red-900 font-semibold">${rejected.status}</span>
                            <p class="notes mt-5">${rejected.notes}</p>
                    </div>
                    <!-- part 4 -->

                    <div class="card-btn flex gap-3">
                        <button class="interview-card-btn text-green-400 border rounded py-1 px-2 font-semibold">Interview</button>
                        <button class="rejected-card-btn text-red-400 border rounded py-1 px-2 font-semibold ">Rejected</button>
                    </div>
                </div>
                <!-- delete -->
                <div class="delete text-gray-500
                        inline-flex items-center justify-center
                        w-10 h-10 border border-gray-500 rounded-full shadow-[0_0_10px_rgba(0,0,0,0.2)] hover:text-red-500 hover:shadow-[0_0_15px_rgba(0,0,0,0.4)] transition-all duration-300  cursor-pointer">
                      
                    <i class="fa-solid fa-trash-can"></i>
                </div>
                
                  

            </div>
        `

        filterSection.appendChild(div)
    }

}