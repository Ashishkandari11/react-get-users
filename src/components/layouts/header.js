
import Menu from '@mui/material/Menu';

import  MenuItem  from "@mui/material/MenuItem";
import Paper from '@mui/material/Paper';

export default function Header(){
        return(
            <>
            <div>
                {/* <h1>Header</h1> */}
              <Paper style={{backgroundColor: "lightblue"}}>  
                <MenuItem style={{fontSize:'60px'}}>Users</MenuItem>
                {/* <MenuItem >My account</MenuItem> */}
             </Paper>
            </div>
            </>
        );
}