import { ref, computed } from "vue"
import { useEventListener } from "./useEventListener";

export function useMedia(query){
	const mediaQuery = window.matchMedia(query);
	const matches = ref(mediaQuery.matches);

	useEventListener(mediaQuery, "change", (arg) => {
		matches.value = arg.matches;
	})

	return matches;
}

export function useScreenSize() {
	const isMobile = useMedia('(max-width: 767px)');
	const isTablet = useMedia('(min-width: 767px) and (max-width: 1268px)');
	const isDesktop = useMedia('(min-width: 1268px)');

	return computed(() => {
		if (isMobile.value) {
			return "mobile";
		} else if (isTablet.value) {
			return "tablet";
		} else if (isDesktop.value) {
			return "desktop";
		} else {
			return undefined;
		}
	})
}

export function usePointerAccuracy() {
	const isFine = useMedia('(pointer: fine)');
	const isCoarse = useMedia('(pointer: coarse)');
	const isNone = useMedia('(pointer: none)')

	return computed(() => {
		if (isFine.value) {
			return "fine";
		} else if (isCoarse.value) {
			return "coarse";
		} else if (isNone.value) {
			return "none";
		} else {
			return undefined;
		}
	})
}

export function usePrefersReducedMotion() {
	const isEnable = useMedia('(prefers-reduced-motion)');

	return computed(() => {
		if (isEnable.value) {
			return true;
		} else {
			return false;
		}
	})
}