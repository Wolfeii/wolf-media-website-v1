import { FC} from 'react';

export enum Type {
    PRIMARY,
    SECONDARY
}

export type ButtonProps = {
    type: Type;
    href: string;
    text: string;
}

export const Button: FC<ButtonProps> = (props) => {
    return (
        <div className='btn-container'>
            <a className={`btn btn--${props.type === Type.PRIMARY ? "primary" : "secondary"}`} href={props.href}>
                {props.text}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 14" width="16px" height="14px"><path d="M9.70710678,0.292893219 L15.7071068,6.29289322 C15.7425008,6.32828727 15.774687,6.36567442 15.8036654,6.40469339 L15.8753288,6.5159379 L15.9287745,6.62866398 L15.9641549,6.73400703 L15.9930928,6.8819045 L16,7 L15.9972121,7.07523854 L15.9797599,7.20072576 L15.9502619,7.31214252 L15.9063266,7.42322155 L15.844312,7.53608818 L15.7854516,7.61907892 L15.7071068,7.70710678 L9.70710678,13.7071068 C9.31658249,14.0976311 8.68341751,14.0976311 8.29289322,13.7071068 C7.90236893,13.3165825 7.90236893,12.6834175 8.29289322,12.2928932 L12.584,8 L1,8 C0.44771525,8 0,7.55228475 0,7 C0,6.44771525 0.44771525,6 1,6 L12.585,6 L8.29289322,1.70710678 C7.90236893,1.31658249 7.90236893,0.683417511 8.29289322,0.292893219 C8.68341751,-0.0976310729 9.31658249,-0.0976310729 9.70710678,0.292893219 Z" fill="currentColor" fill-rule="nonzero"></path></svg>
            </a>
        </div>
    );
};

export default Button;