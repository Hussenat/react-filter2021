// Get visible expenses
// const getVisibileExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
//     return expenses.filter((expense)=>{
//         const textMatch = expense.description
//         .toLowerCase().includes(text.toLowerCase());
//         const startDateMatch = typeof startDate !== "number" || expense.createdAt >= startDate;
//         const endDateMatch = typeof endDate !== "number" || expense.createdAt <= endDate;

//         return textMatch && startDateMatch &&endDateMatch;
//         // using compared function for sorting array of object
//     })
//     .sort((a, b)=>{
//         if (sortBy === "date") {
//             return a.createdAt < b.createdAt ? 1 : -1;
//         }else if (sortBy === "amount") {
//             return a.amount < b.amount ? 1 : -1;
//         }
//     });
// };

// export default getVisibileExpenses;

// refactor of selects/expenses.js file inorder to filter the data on the dashboard page by startDate and EndDate by using moment instance to compare two dates
import moment from "moment"

const getVisibileExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses
    .filter((expense)=>{
        const createdAtMoment = moment(expense.createdAt); //moment instance
        const startDateMatch = startDate
         ? startDate.isSameOrBefore(createdAtMoment, "day")
         : true;
        const endDateMatch = endDate
         ? endDate.isSameOrAfter(createdAtMoment, "day")
         : true;
        const textMatch = expense.description
         .toLowerCase()
         .includes(text.toLowerCase());
        
        return textMatch && startDateMatch &&endDateMatch;
    })
    .sort((a, b)=>{
        if (sortBy === "date") {
            return a.createdAt < b.createdAt ? 1 : -1;
        }else if (sortBy === "amount") {
            return a.amount < b.amount ? 1 : -1;
        }
    });
};

export default getVisibileExpenses;
