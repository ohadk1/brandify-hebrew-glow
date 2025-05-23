
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				brandlify: {
					cyan: '#00E5FF',
					purple: '#8F00FF',
					red: '#FF3C3C',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'collapse-down': {
					from: {
						height: '0',
						opacity: '0',
						transform: 'translateY(-8px)'
					},
					to: {
						height: 'var(--radix-collapsible-content-height)',
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'collapse-up': {
					from: {
						height: 'var(--radix-collapsible-content-height)',
						opacity: '1',
						transform: 'translateY(0)'
					},
					to: {
						height: '0',
						opacity: '0',
						transform: 'translateY(-8px)'
					}
				},
				'star-move': {
					'0%': { transform: 'translateY(0px)' },
					'100%': { transform: 'translateY(2000px)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'gradient-pulse': {
					'0%, 100%': {
						'background-position': '0% 50%'
					},
					'50%': {
						'background-position': '100% 50%'
					}
				},
				'fadeIn': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				'fadeInUp': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'expandWidth': {
					'0%': { width: '0' },
					'100%': { width: '100%' }
				},
				'drawCircle': {
					'0%': { 'stroke-dasharray': '0, 283', opacity: '0' },
					'100%': { 'stroke-dasharray': '283, 283', opacity: '1' }
				},
				'drawCheck': {
					'0%': { 'stroke-dasharray': '0, 75', opacity: '0' },
					'100%': { 'stroke-dasharray': '75, 75', opacity: '1' }
				},
				'blinkingShadow': {
					'0%, 100%': { 'box-shadow': '0 0 5px rgba(0, 229, 255, 0.7), 0 0 10px rgba(143, 0, 255, 0.5)' },
					'50%': { 'box-shadow': '0 0 15px rgba(0, 229, 255, 0.9), 0 0 20px rgba(143, 0, 255, 0.7)' }
				},
				'rotateGlow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'collapse-down': 'collapse-down 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
				'collapse-up': 'collapse-up 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
				'star-move': 'star-move 50s linear infinite',
				'float': 'float 6s ease-in-out infinite',
				'gradient-pulse': 'gradient-pulse 10s ease infinite',
				'blinking-shadow': 'blinkingShadow 3s ease-in-out infinite',
				'rotate-glow': 'rotateGlow 10s linear infinite'
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'gradient-brand': 'linear-gradient(90deg, #00E5FF, #8F00FF, #FF3C3C)',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
