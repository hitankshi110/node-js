const homepage=(req,res)=>{
    res.render('homepage')
}
const Blog=(req,res)=>{
    res.render('Blog')
}

const contactus=(req,res)=>{
    res.render('contactus')
}

const AboutUs=(req,res)=>{
    res.render('AboutUs')
}

const Services=(req,res)=>{
    res.render('Services')
}
module.exports= {homepage,Blog,contactus,AboutUs,Services}