export function validateTitle(title){
    if(!title)
        return "Title Required"
    if(title.length<=3)
        return "Size must Be Grater then 3"
}
export function validatePriority(priority){
    priority= ['Low','High','Medium']
    return true

}
export function Validate(date){

    let dueDate=new Date('2024-10-20')
    let today=new Date()
    if(today<date){
        return "Invalid Date"
    }
    else 
        {
            return date
}
}