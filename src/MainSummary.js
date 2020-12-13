import React from 'react'
import Option from './Option'
import Total from './Total'

class MainSummary extends React.Component {
    render() {
            const summary = Object.keys(this.props.selected).map((feature, idx) => {
                const featureHash = feature + '-' + idx;
                const selectedOption = this.props.selected[feature];
          
                return (
                  <Option feature={feature} featureHash={featureHash} selectedOption={selectedOption}/>
                );
              });
        return (
            <div id="summary-list">
                {summary}
                <Total total={this.props.total} />
            </div>
        )

    }
}

export default MainSummary