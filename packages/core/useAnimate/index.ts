import type { Ref } from 'vue-demi'
import { ref } from 'vue-demi'
import type { MaybeRef } from '@vueuse/shared'
import type { ConfigurableWindow } from '../_configurable'

export interface UseAnimateOptions extends KeyframeAnimationOptions, ConfigurableWindow {
  /**
   * Will automatically run play when `useAnimate` is used
   *
   * @default true
   */
  immediate?: boolean
  /**
   * Whether to commits the end styling state of an animation to the element being animated
   *
   * @default false
   */
  commitStyles?: boolean
  /**
   * Whether to persists the animation
   *
   * @default false
   */
  persist?: boolean
  /**
   * Executed after animation initialization
   */
  onReady?: (animate: Animation) => void
  /**
   * Callback when error is caught.
   */
  onError?: (e: unknown) => void
}

export type UseAnimateKeyframes = MaybeRef<Keyframe[] | PropertyIndexedKeyframes | null>

export interface UseAnimateReturn {
  isSupported: Ref<boolean>
}

/**
 * Reactive Web Animations API
 *
 * @see https://vueuse.org/useAnimate
 * @param target
 * @param keyframes
 * @param options
 */
export function useAnimate(
): UseAnimateReturn {
  const isSupported = ref(true)

  return {
    isSupported,
  }
}
