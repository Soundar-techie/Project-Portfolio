const Header = () =>{
    return(
         <div style={{display:"flow"}}>
                <div style={{color:"#8F8282"}}>Logo</div>
            <div style={{display:"flex",justifyContent:"center"}}>
                <div className="flex gap-[50px] bg-[#c9bbbb] px-4 py-2 rounded-[20px] text-black">
                    <button>About</button>
                    <button>Project</button>
                    <button>Inten</button>
                    <button>Contect</button>
                </div>
            </div>
         </div>
    );
};

export default Header;