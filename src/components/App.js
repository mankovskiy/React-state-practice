import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import stickers from '../stickers.json';
import { StickerList } from '../components/StickerList';
import { SignUpForm } from '../components/Sticker';
export class App extends Component {
  state = {
    selectedStickerLabel: null,
  };

  selectStickerLabel = label => {
    this.setState({ selectedStickerLabel: label });
  };

  render() {
    return (
      <>
        <h1>{this.state.selectedStickerLabel}</h1>
        <StickerList stickers={stickers} onSelect={this.selectStickerLabel} />
        <SignUpForm />
        <GlobalStyle />
      </>
    );
  }
}
