const Course = require('../../model/Course')
const {mongooseToObject} = require('../../until/mongoose')
class CoursesController {
    show (req, res, next){
        Course.findOne({slug:req.params.slug})
        .then(course =>{
            res.render('courses/show',{course: mongooseToObject(course)})
        })
        .catch(next)
    }

    create (req, res, next){
        res.render('courses/create');
    }

    store (req, res, next){
        const formData = req.body;
        formData.image = 'https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_…'
        const course = new Course(formData);
        course.save()
            .then(() => res.redirect('/'))
            .catch(error => {

            });
         
    }
}
module.exports = new CoursesController();