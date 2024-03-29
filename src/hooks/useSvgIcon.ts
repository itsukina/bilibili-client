import SvgIcon from "@/components/svg-icon/index.vue";

export default function useSvgIcon(name: string, width: number, height: number, classNames?: string[]) {
	const app = createApp(SvgIcon, { name: name, width: width, height: height });
	const div = document.createElement("div");
	app.mount(div);
	if (classNames) {
		classNames.forEach(c => div.classList.add(c));
	}
	return div;
}
