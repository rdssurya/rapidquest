import React from 'react';
import styles from './FirstComponent.module.css';
import Button from '@mui/material/Button';

const FirstComponent = () => {
  return (
    <div className={styles.parentDiv}>
        <div className={styles.userDetails}>
            <div className={styles.imageDiv}>
            <img style={{width:'100%', height:'100%'}} src='data:image/jpeg;base64,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' alt='avatar'/>
            </div>
            <div className={styles.textDiv}>
                <span style={{fontSize:'30px',fontWeight:'bold'}}>
                    Hi Mike,
                </span>
                <span style={{color:'rgb(150,150,150)'}}>
                    welcome back.
                </span>
            </div>
        </div>
        <div style={{fontSize:'20px',fontWeight:'bold'}}>Today</div>
        <div className={styles.textDiv}>
            <span style={{fontSize:'30px',fontWeight:'bold'}}>
                $19,892
            </span>
            <span style={{color:'rgb(150,150,150)'}}>
                Amount Balance
            </span>
        </div>
        <div className={styles.textDiv}>
            <span style={{fontSize:'20px',fontWeight:'bold'}}>
                $4,000
            </span>
            <span style={{color:'rgb(150,150,150)'}}>
                Year-To-Date Contributions
            </span>
        </div>
        <div className={styles.textDiv}>
            <span style={{fontSize:'20px',fontWeight:'bold'}}>
                $1,892
            </span>
            <span style={{color:'rgb(150,150,150)'}}>
                Total Interest
            </span>
        </div>
        <Button variant="contained" style={{width:'50%'}}>I want to</Button>
        <div style={{fontSize:'20px',fontWeight:'bold',marginTop:'25px'}}>Recent Transactions</div>
        <div className={styles.textDiv}>
            <span style={{color:'rgb(150,150,150)'}}>
                2020-08-07
            </span>
            <span style={{fontWeight:'bold'}}>
                Withdrawl Transfer to Bank-XXX11
            </span>
            <span><hr/></span>
        </div>
        <div className={styles.textDiv}>
            <span style={{color:'rgb(150,150,150)'}}>
                2020-07-21
            </span>
            <span style={{fontWeight:'bold'}}>
                Withdrawl Transfer to Bank-XXX11
            </span>
            <span><hr/></span>
        </div>
        <div className={styles.textDiv}>
            <span style={{color:'rgb(150,150,150)'}}>
                2020-07-16
            </span>
            <span style={{fontWeight:'bold'}}>
                Withdrawl Transfer to Bank-XXX11
            </span>
            <span><hr/></span>
        </div>   
    </div>
  )
}

export default FirstComponent;