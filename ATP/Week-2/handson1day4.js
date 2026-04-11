/*Hands-On 1: Shallow Copy (Controlled Mutation Use Case)
-------------------------------------------------------
Given Data:
*/
const user = {
             id: 101,
             name: "Ravi",
             preferences: {
                  theme: "dark",
                  language: "en"
                }
              };
/* Task
    1. Create a shallow copy of user
    2. Change:
          i. name in the copied object
          ii. preferences.theme in the copied object
          iii .Log both original and copied objects
          iv. Observe what changes and what doesn’t
          */
let Cuser={...user}
Cuser.name="Venkat"
Cuser.preferences.theme="Light"
console.log(Cuser)
console.log(user)

/*PS C:\Users\dhara\JavaScript\day4> node .\handson1.js
{
  id: 101,
  name: 'Ravi',
  preferences: { theme: 'light', language: 'en' }
}
{
  id: 101,
  name: 'Venkat',
  preferences: { theme: 'light', language: 'en' }
}*/