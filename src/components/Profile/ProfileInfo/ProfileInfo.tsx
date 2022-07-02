import React from 'react';
import s from './ProfileInfo.module.css'
import ava from "../../img/ava.jpg";

export const ProfileInfo = () => {
    return (
        <div>
            <img className={s.profileImg}
                 src="https://avatars.mds.yandex.net/get-marketcms/475644/img-de1b3359-1c05-4e32-9e78-3e948517edb8.jpeg/optimize"
                 alt=""/>
            <div className={s.profileContainer}>
                <div>
                    <img src={ava} alt=""/>
                </div>
                <div>
                    noname from nowhere
                </div>
            </div>
        </div>
    )
}