import ru from './ru.jpg';
import en from './en.jpg';
import pl from './pl.jpg';


interface IFLAG {
    ru: string;
    en: string;
    pl: string;
}


export const FLAG: IFLAG = { ru, en, pl };