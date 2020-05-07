import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {getDefaultWalletConfigKeys, WalletConfigKeyI, WalletConfigParamEnum,} from '../../config/default-wallet-config';
import {Wallet} from '../../models/wallet';

@Component({
  selector: 'app-wallet-config',
  templateUrl: './wallet-config.component.html',
  styleUrls: ['./wallet-config.component.scss'],
})
export class WalletConfigComponent implements OnInit {
  public defaultWalletConfigKeys: WalletConfigKeyI[];
  public walletConfigParamEnum: typeof WalletConfigParamEnum = WalletConfigParamEnum;
  public today: string;
  @Input() wallet: Wallet;
  @Output() changeWallet: EventEmitter<Wallet> = new EventEmitter<Wallet>();

  constructor() {
  }

  ngOnInit() {
    this.defaultWalletConfigKeys = getDefaultWalletConfigKeys();
    this.today = new Date().toLocaleDateString();
  }

}
