
import { Image,Container } from "react-bootstrap"
import classes from "./About.module.css"
function About() {
    return (
        
            <Container  className={`${classes.container} my-5 w-75`}>
            <h2>About</h2>
            <div>
                <Image className={classes.img} roundedCircle   src="https://prasadyash2411.github.io/ecom-website/img/Band%20Members.png"></Image>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nostrum at consequatur magnam commodi. Praesentium quos a ea veniam sed. Praesentium quibusdam quis inventore est illum! Voluptatem voluptate consequatur odit similique soluta unde pariatur voluptatibus aliquid? Cupiditate, enim officiis. Rem minus minima possimus vero dolorem placeat, odit dolorum maiores. Nulla officiis quis aut soluta porro distinctio earum commodi numquam, eius cum animi aliquid error blanditiis, iusto sed voluptatum dolores tempora voluptates maxime molestiae? Consequuntur aspernatur vero minus quae! Voluptas ipsum ad, iste culpa dicta sunt sequi possimus autem nemo nisi eius temporibus laboriosam rem sint unde quidem aliquam tenetur. Optio ex reprehenderit nobis, ea aspernatur totam dolorum dolore quaerat unde. Facilis incidunt sit in quibusdam totam quasi eveniet quis porro omnis expedita nesciunt deleniti doloribus quae, dolorem cupiditate. Alias illum facilis maiores aut perspiciatis corporis eum modi ex non repellendus debitis ea totam, molestias nesciunt nihil voluptatem explicabo, tempora laborum vitae delectus eligendi dolore? Impedit laborum at cumque itaque odit, ad labore deserunt. Voluptates nulla dolor, reprehenderit minus debitis consequatur dolores possimus at eligendi minima quia. Quaerat, laboriosam aliquam omnis hic laudantium sunt delectus commodi? Non eligendi corporis natus voluptas, odit laboriosam perspiciatis saepe iusto rerum illo modi recusandae eos?</p>
            </div>
            </Container>
        
    )
}

export default About;