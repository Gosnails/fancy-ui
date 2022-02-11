import * as React from "react";
import classNames from "classnames";
import omit from "rc-util/lib/omit";

import "./button.scss";

export type ButtonType = "default" | "primary" | "warning" | "text" | "success" | "danger" | "info";
export type ButtonShape = "default" | "circle" | "round";
export type ButtonSize = "small" | "medium" | "mini";
export type ButtonHTMLType = "submit" | "button" | "reset";

export interface BaseButtonProps {
	type?: ButtonType;
	icon?: React.ReactNode;
	/** @default default */
	shape?: ButtonShape;
	size?: ButtonSize;
	className?: string;
	loading?: boolean;
	children?: React.ReactNode;
}

export type AnchorButtonProps = {
	href: string;
	target?: string;
	onClick?: React.MouseEventHandler<HTMLElement>;
} & BaseButtonProps &
	Omit<React.AnchorHTMLAttributes<any>, "type" | "onClick">;

export type NativeButtonProps = {
	htmlType?: ButtonHTMLType;
	onClick?: React.MouseEventHandler<HTMLElement>;
} & BaseButtonProps &
	Omit<React.ButtonHTMLAttributes<any>, "type" | "onClick">;

export type ButtonProps = Partial<AnchorButtonProps & NativeButtonProps>;

const Button: React.FC<ButtonProps> = (props) => {
	const {
		type = "default",
		shape = "default",
		disabled = false,
		loading,
		size: customizeSize,
		className,
		children,
		icon,
		htmlType = "button" as ButtonProps["htmlType"],
		...rest
	} = props;
	const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>) => {
		const { onClick, disabled } = props;
		if (disabled) {
			e.preventDefault();
			return;
		}
		(onClick as React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>)?.(e);
	};
	const prefixCls = "fancy-button";
	const linkButtonRestProps = omit(rest as AnchorButtonProps & { navigate: any }, ["navigate"]);
	const hasHref = linkButtonRestProps.href !== undefined;

	const classes = classNames(
		prefixCls,
		{
			"is-disabled": disabled,
			"is-loading": loading,
			[`${prefixCls}--${type}`]: type,
			[`${prefixCls}--${shape}`]: shape,
			[`${prefixCls}--link`]: hasHref,
			[`${prefixCls}--${customizeSize}`]: customizeSize,
		},
		className
	);

	if (hasHref) {
		return (
			<a {...linkButtonRestProps} className={classes} onClick={handleClick}>
				<span>{children}</span>
			</a>
		);
	}

	return (
		<button type={htmlType} disabled={disabled} className={classes} onClick={handleClick} {...rest}>
			<span>{children}</span>
		</button>
	);
};

export default Button;
