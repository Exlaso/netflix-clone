import Image from "next/image";


const loading = () => {
    return <section className={"flex justify-center items-center h-screen w-screen"}>
        <Image src={"/netflix-loading.gif"} alt={"Loading"}
               width={400}
               height={400}

        />
    </section>
}
export default loading