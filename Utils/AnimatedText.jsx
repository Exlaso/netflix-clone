import React from 'react'
import styles from './Animated.module.css'
const AnimatedText = ({Text = ""}) => {
  return (
<div className={styles.Animatedwrapper}>
	<svg className={styles.Animatedsvg}>
		<text x="50%" y="50%" dy=".35em" textAnchor="middle" className={styles.Animatedtext}>
			{Text}
		</text>
	</svg> 
</div>
  )
}

export default AnimatedText