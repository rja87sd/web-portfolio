"use client";

import Image from "next/image";
import styles from "./Hero.module.css";
import "../globals.css";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.text}>
        <h1 className=" my-4 neon-text text-5xl">Hello, World!</h1>
        <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius sit
        architecto itaque ea porro dolorum deleniti rem explicabo ut fugit iusto
        molestiae obcaecati error illo, perferendis, incidunt alias magnam
        commodi. Maxime, cupiditate. At est repellat expedita repellendus
        architecto, praesentium enim doloribus, illum suscipit quod mollitia,
        voluptates quaerat perspiciatis voluptas quam harum laborum id fugit
        quas ipsa voluptatum error corrupti. Labore? Ad ullam voluptatibus eos,
        cum qui aliquam nesciunt quisquam adipisci officia totam tenetur
        corrupti, quas, neque blanditiis placeat debitis aperiam nisi odio sint
        error labore quam. Quo ad repellendus omnis. Aspernatur, exercitationem,
        repellat tenetur nam, animi sapiente fuga perspiciatis laborum rerum
        delectus ipsum commodi dicta? Est dolorem atque, perspiciatis in beatae
        sunt qui molestiae tempora alias perferendis eligendi quisquam animi!
        Perferendis deleniti mollitia harum molestiae eum consequatur tempore
        illo esse asperiores blanditiis, a distinctio nesciunt reiciendis quae
        voluptatibus enim iste fugit ut itaque, officiis laudantium modi
        exercitationem? Modi, suscipit quasi?</p>
      </div>
      <Image
        className={styles.image}
        src="https://images.unsplash.com/photo-1548412576-d92cb3275e23?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Description of image"
        width={400}
        height={300}
      />
    </div>
  );
}
