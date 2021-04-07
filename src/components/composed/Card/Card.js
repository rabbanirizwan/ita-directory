import React from "react";
import {
	Container,
	CardInfo,
	StyledTitle,
	StyledImage,
	StyledText,
	StyledDescription,
	StyledFooter,
	StyledImageWrapper,
} from "./Card.style.js";
import PropTypes from "prop-types";

const Card = ({
	image,
	title,
	description,
	text,
	footer,
	containerClassName,
	descriptionClassName,
	titleClassName,
}) => {
	return (
		<Container className={containerClassName}>
			<StyledImageWrapper>
				<StyledImage {...image} />
			</StyledImageWrapper>
			<CardInfo>
				<StyledTitle className={titleClassName}>{title}</StyledTitle>
				<StyledDescription className={descriptionClassName}>
					{description}
				</StyledDescription>

				<StyledText>{text}</StyledText>
				<StyledFooter>{footer}</StyledFooter>
			</CardInfo>
		</Container>
	);
};
Card.propTypes = {
	image: PropTypes.object,
	title: PropTypes.string,
	containerClassName: PropTypes.string,
	descriptionClassName: PropTypes.string,
	description: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.string,
	]).isRequired,
	text: PropTypes.string,
	footer: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.string,
	]),
};

export default Card;
