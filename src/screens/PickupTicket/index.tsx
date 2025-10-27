import React, { useMemo, useState } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { RootStacksProp } from '../Screens';
import { shipAtom, userAtom } from './stores';
import { useAtom } from 'jotai';

interface MyProps {
  navigation?: RootStacksProp;
}

const PickupTicket: React.FC<MyProps> = props => {
  const [ship, setShip] = useAtom(shipAtom);
  const [user, setUser] = useAtom(userAtom);
  const [detail, setDetail] = useState<any>({});

  const isOnlySupportManualPay = useMemo(() => {
    let isPerson = ['4', '8'].includes(`${user.userType}`);
    let isAuthedUser = user?.riskAudit == 1; // 个人风险通过
    let isAuthedShip = ship?.riskAudit == 1; //  船风险通过
    let isJishiPay = detail?.instantPaymentSwitch == 1; // 及时付
    return isPerson && (isAuthedUser || isAuthedShip || isJishiPay);
  }, [ship, user, detail]);
  return null;
};

class PickupTicketClass extends React.Component<MyProps> {
  state: any = {
    detail: {} as any,
    user: {} as any,
    ship: {} as any,
    isOnlySupportManualPay: false,
  };

  constructor(props: MyProps) {
    super(props);
    this.state = {
      detail: {} as any,
      user: {} as any,
      ship: {} as any,
      isOnlySupportManualPay: false,
    };
  }

  combineIsOnlySupportManualPay() {
    let isPerson = ['4', '8'].includes(`${this.state.user.userType}`);
    let isAuthedUser = this.state.user?.riskAudit == 1; // 个人风险通过
    let isAuthedShip = this.state.ship?.riskAudit == 1; //  船风险通过
    let isJishiPay = this.state.detail?.instantPaymentSwitch == 1; // 及时付
    return isPerson && (isAuthedUser || isAuthedShip || isJishiPay);
  }

  componentDidMount() {
    EventBus.addListener(Constant.UPDATE_DETAIL, (data: any) => {
      this.setState({ detail: data }, () => {
        this.setState({
          isOnlySupportManualPay: this.combineIsOnlySupportManualPay(),
        });
      });
    });
  }

  componentWillUnmount(): void {
    EventBus.removeListener(Constant.UPDATE_DETAIL);
  }

  render() {
    return null;
  }
}

class EventBus {
  static addListener(event: string, callback: (data: any) => void) {}
  static removeListener(event: string) {}
}

enum Constant {
  UPDATE_DETAIL = 'updateDetail',
}

const styles = StyleSheet.create({});
export default PickupTicket;
