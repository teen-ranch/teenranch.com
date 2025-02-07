import React from "react";

export default function Terms({ type }) {
	if (type === "mdee") {
		return (
			<>
				<h3>Mother Daughter Cancellation Policy</h3>
				<p>
					Any cancellation occurring 45 days or more before the event will
					receive a full refund less a $25 administration fee per registrant.
					Any cancellation occurring up to 30 days before will receive a 75%
					refund. Any cancellation occurring up to 14 days before the event will
					receive a 50% discount. Any cancellation occurring less than 14 days
					is not eligible for a refund.
				</p>
			</>
		);
	}
	if (type === "cfaw") {
		return (
			<>
				<h3>Camp for a Weekend Cancellation Policy</h3>
				<p>
					Any cancellation occurring 45 days or more before the event will
					receive a full refund less a $25 administration fee per registrant.
					Any cancellation occurring up to 30 days before will receive a 75%
					refund. Any cancellation occurring up to 14 days before the event will
					receive a 50% discount. Any cancellation occurring less than 14 days
					is not eligible for a refund.
				</p>
			</>
		);
	}
	if (type === "hockeyAndSkating") {
		return (
			<>
				<h3>Hockey & Skating Program Cancellation Policy</h3>
				<p>
					Any cancellation occurring before the start of a program will receive
					a full refund, less a $25 administration fee. No refunds are issued
					after the start of a program. If a program is cancelled by Teen Ranch,
					a full refund will be issued.
				</p>

				<h5>Inclement Weather</h5>
				<p>
					In cases of inclement weather, the Teen Ranch Ice Corral arena will
					remain open during regular hours of operation, with Teen Ranch
					programs operating as usual. However, individual bookings and rentals
					may be canceled by their organizer. Please contact your organizer if
					you are unsure.
				</p>
			</>
		);
	}

	if (type === "overnight") {
		return (
			<>
				<h3>Summer Overnight Camp Terms & Conditions</h3>
				<p>
					In order to keep payments as low-risk as possible for you, we are only
					requiring a $250 non-refundable deposit per overnight camp
					registration. The balance will be due 6 weeks prior to arrival at camp
					and is non-refundable. In the case of absence for any reason during
					the camp week, including illness, homesickness, or disciplinary
					departure, no refund will be issued. In the case of special
					circumstances, contact the camp registrar.
				</p>
				<ul>
					<li>$250 non-refundable deposit per overnight camp registration</li>
					<li>
						The balance is due 6 weeks prior to arrival at camp and is
						non-refundable.
					</li>
				</ul>
			</>
		);
	}

	if (type === "ultimate") {
		return (
			<>
				<h3>Ultimate Day Camp Terms & Conditions</h3>
				<p>
					In order to keep payments as low-risk as possible for you, we are only
					requiring a $175 non-refundable deposit per ultimate day camp
					registration. The balance will be due 6 weeks prior to arrival at camp
					and is non-refundable. In the case of absence for any reason during
					the camp week, including illness, homesickness, or disciplinary
					departure, no refund will be issued. In the case of special
					circumstances, contact the camp registrar.
				</p>
				<ul>
					<li>
						$175 non-refundable deposit per ultimate day camp registration
					</li>
					<li>
						The balance is due 6 weeks prior to arrival at camp and is
						non-refundable.
					</li>
				</ul>
			</>
		);
	}

	if (type === "day") {
		return (
			<>
				<h3>Junior Day Camp Terms & Conditions</h3>
				<p>
					In order to keep payments as low-risk as possible for you, we are only
					requiring a $100 non-refundable deposit per day camp registration. The
					balance will be due 6 weeks prior to arrival at camp and is
					non-refundable. In the case of absence for any reason during the camp
					week, including illness, homesickness, or disciplinary departure, no
					refund will be issued. In the case of special circumstances, contact
					the camp registrar.
				</p>
				<ul>
					<li>$100 non-refundable deposit per day camp registration</li>
					<li>
						The balance is due 6 weeks prior to arrival at camp and is
						non-refundable.
					</li>
				</ul>
			</>
		);
	}

	return (
		<>
			<h3>Summer Camp Terms & Conditions</h3>
			<p>
				In order to keep payments as low-risk as possible for you, we are only
				requiring a non-refundable deposit per registration. The balance will be
				due 6 weeks prior to arrival at camp and is non-refundable. In the case
				of absence for any reason during the camp week, including illness,
				homesickness, or disciplinary departure, no refund will be issued. In
				the case of special circumstances, contact the camp registrar.
			</p>
			<ul>
				<li>$100 non-refundable deposit per day camp registration</li>
				<li>$175 non-refundable deposit ultimate day camp registration</li>
				<li>$250 non-refundable deposit per overnight camp registration</li>
				<li>
					The balance is due 6 weeks prior to arrival at camp and is
					non-refundable.
				</li>
			</ul>
		</>
	);
}

export function SummerCampTerms() {
	return <Terms />;
}

export function OvernightCampTerms() {
	return <Terms type="overnight" />;
}

export function DayCampTerms() {
	return <Terms type="day" />;
}

export function UltimateDayCampTerms() {
	return <Terms type="ultimate" />;
}

export function Terms_MDEE() {
	return (
		<TermsWrapper>
			<Terms type="mdee" />
		</TermsWrapper>
	);
}
export function Terms_CFAW() {
	return (
		<TermsWrapper>
			<Terms type="cfaw" />
		</TermsWrapper>
	);
}
export function Terms_HockeyAndSkating() {
	return (
		<TermsWrapper>
			<Terms type="hockeyAndSkating" />
		</TermsWrapper>
	);
}

function TermsWrapper({ children }) {
	return <em style={{ fontSize: "10pt" }}>{children}</em>;
}
