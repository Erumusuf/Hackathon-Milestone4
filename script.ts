//Get refrences to form and display area
const form= document.getElementById(`resume-form`) as HTMLFormElement;
const resumeDisplayElememt = document.getElementById(`resume-display`) as HTMLDivElement;
 //Handle form submission

form.addEventListener(`submit`,(event: Event)=>{
    event.preventDefault();//prevent reload page

    //collect input values
    const name= (document.getElementById(`name`) as HTMLInputElement).value;
    const email= (document.getElementById(`e-mail`) as HTMLInputElement).value;
    const phone= (document.getElementById(`phone`) as HTMLInputElement).value;
    const education= (document.getElementById(`education`) as HTMLInputElement).value;
    const experience= (document.getElementById(`experience`) as HTMLInputElement).value;
    const skills= (document.getElementById(`skills`) as HTMLInputElement).value;
    
    
    //generate the resume content dynamically

    const resumeHTML = `
    <h2><b>Editable Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b> name :</b><span contenteditable= "true">${name}</span></p>
    <p><b> email :</b><span contenteditable= "true">${email}</span></p>
    <p><b> phone :</b><span contenteditable= "true">${phone}</span></p>
    
    <h3>Educatin</h3>
    <p contenteditable= "true">${education}</p>
    
    <h3>Experience</h3>
    <p contenteditable= "true">${experience}</p>
    
    <h3>skills</h3>
    <p contenteditable= "true">${skills}</p>`;

    //display generated Resume

    if(resumeDisplayElememt){
        resumeDisplayElememt.innerHTML = resumeHTML;
    }
    else{
        console.error(`The Resume Display Element is Missing.`);
    }
    
    

})