import React from 'react'
import styles from './Animated.module.css'
const AnimatedText = ({Text = "",duration = 4000}) => {
  return (
<div className={styles.Animatedwrapper}>
	<svg className={styles.Animatedsvg}>
		<text x="50%" y="50%" dy=".35em" textAnchor="middle" className={`${styles.Animatedtext} `} style={{
			animationDuration: `${duration}ms`
		}}>
			{Text}
		</text>
	</svg> 
</div>
  )
}

export default AnimatedText