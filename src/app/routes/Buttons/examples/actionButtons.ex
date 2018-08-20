import { Button, IconButton } from 'dayler-ui';


<Button title="Start"
    color="dark"
    className={style.button}
    isLoading={isLoading}
    disabled={isLoading}
    onClick={this.handleLoadingStart} />

<Button title="Start Long Text For Width Example"
    color="green"
    className={style.button}
    isLoading={isLoading}
    disabled={isLoading}
    onClick={this.handleLoadingStart} />

<IconButton icon="slack"
    color="red"
    className={style.button}
    isLoading={isLoading}
    disabled={isLoading}
    onClick={this.handleLoadingStart} />

<IconButton icon="download"
    title="Start"
    color="yellow"
    className={style.button}
    isLoading={isLoading}
    disabled={isLoading}
    onClick={this.handleLoadingStart} />

<Button title="Stop"
    color="red"
    onClick={this.handleLoadingStop} />