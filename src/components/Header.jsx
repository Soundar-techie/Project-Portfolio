const Header = () =>{
    return(
            <div className="flex justify-between mx-10">

                <img className="w-[100px] h-[100px] m-5 flex justify-self-start rounded-[50px]" src="\src\assets\Portfolio-Logo.jpg"></img>

         <div className="flex justify-center">


                <div className="flex justify-center w-[400px] h-[50px] m-5 gap-[50px] bg-[#c9bbbb] px-4 py-2 rounded-[20px] text-black text-center">
                    <button>About</button>
                    <button>Project</button>
                    <button>Inten</button>
                    <button>Contect</button>
                </div>
            </div>

            <div><button>TuneUp</button></div>
         </div>
    );
};

export default Header;