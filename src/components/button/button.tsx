import classNames from 'classnames';
import styles from './button.module.scss';

type ButtonVariant = 'primary' | 'secondary' | 'danger';

type ButtonSize = 'medium' | 'small' | 'large';

export interface ButtonProps {
    className?: string;
    variant?: ButtonVariant;
    size?: ButtonSize;
    children?: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Button = ({
    className,
    variant,
    size,
    children,
    disabled,
    onClick,
}: ButtonProps) => {
    return (
        <button
            className={classNames(
                styles.root,
                variant && styles[variant],
                size && styles[size],
                className,
            )}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};
