import hoshino_battle from './images/Hoshino_Battle_00.png';
import mika from './images/Mika_00.png';
import {View, Image} from 'react-native';

export default function Image_display({image_url}) {
    return (
    <div style={{
        width:"500px", 
        height:"500px", 
        overflow:'hidden', 
        backgroundImage:`url(${image_url})`,
        backgroundPosition: '20% 40%'
        }}>
    </div>

    )
}
