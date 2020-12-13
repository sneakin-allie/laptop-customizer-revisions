import React from 'react'
import slugify from 'slugify';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

class Parts extends React.Component {

    render() {
        const items = this.props.features[this.props.feature]
        const options = items.map(item => {
            const itemHash = slugify(JSON.stringify(item));

            return (
                <div key={itemHash} className="feature__item">
                    <input
                        type="radio"
                        id={itemHash}
                        className="feature__option"
                        name={slugify(this.props.feature)}
                        checked={item.name === this.props.selected[this.props.feature].name}
                        onChange={e => this.props.updateFeature(this.props.feature, item)}
                    />
                    <label htmlFor={itemHash} className="feature__label">
                        {item.name} ({USCurrencyFormat.format(item.cost)})
                    </label>
                </div>
            )

        });

        return (
            <div>
                <fieldset className="feature" key={this.props.featureHash}>
                    <legend className="feature__name">
                        <h3>{this.props.feature}</h3>
                    </legend>
                    {options}
                </fieldset>
            </div>    
        )
    }
}

export default Parts