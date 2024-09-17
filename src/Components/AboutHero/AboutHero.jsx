import aboutHeroImg from "../../assets/Hero/aboutHero.png"

const AboutHero = () => {
    return (
        <div
            style={{
                backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%), url(${aboutHeroImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                height: "700px"
            }}
            className="flex items-center justify-start px-[160px] "
        >
            <div className="font-normal text-[#FFFFFF]">
                <h1 className="text-[64px] mb-[50px]">Console Academy</h1>
                <p className="text-[40px] line-clamp-2 w-[963px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio deleniti nostrum velit ducimus in harum ipsum enim dolores inventore culpa, veniam praesentium labore asperiores molestias delectus nesciunt error quae vel. Laborum, veritatis dignissimos. Odio et dolor placeat harum earum deleniti, fugiat suscipit quisquam fugit officiis dicta voluptas vitae aspernatur debitis nisi eligendi cumque veritatis possimus ut minima esse aut. Ipsam molestias assumenda eaque voluptate et modi nisi esse tenetur corrupti quibusdam. Explicabo laboriosam, vel aspernatur aperiam minus possimus odio? Repellat reprehenderit alias reiciendis exercitationem, deleniti consequuntur. Recusandae veniam optio qui!</p>
            </div>
        </div>
    )
}

export default AboutHero
