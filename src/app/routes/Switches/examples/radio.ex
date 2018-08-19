import { Radio } from 'dayler-ui';

<Radio checked={checkedRadio === "0"}
    title="Default"
    onChange={this.handleRadioChange}
    value="0"
/>
<Radio checked={checkedRadio === "1"}
    title="Red"
    color="red"
    onChange={this.handleRadioChange}
    value="1"
/>
<Radio checked={checkedRadio === "2"}
    title="Green"
    color="green"
    onChange={this.handleRadioChange}
    value="2"
/>
<Radio checked={checkedRadio === "3"}
    title="Yellow"
    color="yellow"
    onChange={this.handleRadioChange}
    value="3"
/>
<Radio checked={checkedRadio === "4"}
    title="Dark"
    color="dark"
    onChange={this.handleRadioChange}
    value="4"
/>