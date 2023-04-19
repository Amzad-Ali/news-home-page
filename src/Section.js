import React from 'react'
// import image from './assets/image-web-3-desktop.jpg';
export default function Section() {
  return (
   <section className='container'>
    <div className='con2'>
        <div className='divimg'>
            {/* <img src={image} alt="" /> */}
        </div>
        <div className='paracon'>
        <div className='para'>The Bright Future of Web 3.0?</div>
        <div className='para2'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, tempora sint amet voluptate illo nihil reiciendis dolor voluptates</p>
        <button type="submit" className='bg-red-500'>READ MORE</button>
        </div>
        </div>
    </div>
    <aside className='aside'>
        <div className='asidepara'>
        <h1>New</h1>
        <h3>Hydrogen VS Electric Cars</h3>
        <p>Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Blanditiis, dolore.</p>
        <hr />
   

        <div className="asparschild">
        <h3>Hydrogen VS Electric Cars</h3>
        <p>Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Blanditiis, dolore.</p>
        <hr />
        </div>

        <div className="asparschild">
        <h3>Hydrogen VS Electric Cars</h3>
        <p>Lorem ipsum dolor sit amet consectetur
             adipisicing elit. Blanditiis, dolore.</p>
        </div>
        </div>
    </aside>
   </section>
  )
}
