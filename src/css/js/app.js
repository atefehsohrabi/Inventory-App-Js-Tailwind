const category = []
const product = []

export default class Storage{


    static getAllCategory(){
        const savedCategories = JSON.parse(localStorage.getItem('category')) || [];
       return sevedCategories.sort((a, b) =>{return new Date (a.createdAt) > new Date(b.createdAt) ? -1 : 1} )
    }
}