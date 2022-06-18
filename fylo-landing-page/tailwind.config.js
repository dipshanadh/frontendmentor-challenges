module.exports = {
	content: ["./*.html"],
	theme: {
		extend: {
			// screens
			screens: {
				sm: "480px",
				md: "768px",
				lg: "976px",
				xl: "1440px",
			},

			// colors
			colors: {
				// dark colors
				// intro and email sign up background
				DarkBlueIntro: "hsl(217, 28%, 15%)",
				// main background
				DarkBlueMain: "hsl(218, 28%, 13%)",
				// footer background
				DarkBlueFooter: "hsl(216, 53%, 9%)",
				// testimonials background
				DarkBlueTestis: "hsl(219, 30%, 18%)",
				// inside call-to-action gradient
				Cyan: "hsl(176, 68%, 64%)",
				// inside call-to-action gradient
				Blue: "hsl(198, 60%, 50%)",
				White: "hsl(0, 0%, 100%)",

				// light colors
				VeryDarkBlue: "hsl(243, 87%, 12%)",
				DesaturatedBlue: "hsl(238, 22%, 44%)",
				BrightBlue: "hsl(224, 93%, 58%)",
				ModerateCyan: "hsl(170, 45%, 43%)",
				LightGrayishBlue: "hsl(240, 75%, 98%)",
				LightGray: "hsl(0, 0%, 75%)",

				// for error
				Red: "hsl(0, 100%, 63%)",
			},

			// font family
			fontFamily: {
				Raleway: ["Raleway", "sans-serif"],
				openSans: ['"Open Sans"', "sans-serif"],
			},
		},
	},
	plugins: [],
}
