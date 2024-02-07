import Image from "next/image";

const loading = () => {
    return <section className={"flex justify-center items-center h-screen w-screen"}>
        <Image
            src={"/static/loading.svg"}
            width={100}
            height={100}
            alt={"loading"}
            className={"flex justify-center items-center object-contain"}
        ></Image>
    </section>
}
export default loading