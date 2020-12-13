import React from 'react'
import Parts from './Parts'
import FEATURES from './FEATURES'

class Specs extends React.Component {
    render() {
        const features = Object.keys(FEATURES).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
              return (
                <Parts feature={feature}
                        selected={this.props.selected}
                        updateFeature={this.props.updateFeature}
                        features={FEATURES}
                        featureHash={featureHash}
                />
              );
        });

        return (
            <div>
                {features}
            </div>
        )
    }
}

export default Specs