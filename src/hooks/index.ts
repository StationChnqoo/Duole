import { useCaches } from '@src/constants/store';
import { useEffect, useMemo, useState } from 'react';

const useUsePermission = () => {
  const { isApplePassed, tryUseCount, currentKami, setIsApplePassed } =
    useCaches();
  const [isCouldUse, setIsCouldUse] = useState(false);

  const loadIsKamiCouldUse = async () => {
    const result = (await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(true);
      }, 1000);
    })) as boolean;
    return result;
  };

  const checkApplePassed = async () => {
    const result = (await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(true);
      }, 1000);
    })) as boolean;
    setIsApplePassed(result as boolean);
  };

  useEffect(() => {
    checkApplePassed();
  }, []);

  const checkIsCouldUse = async () => {
    const result = await loadIsKamiCouldUse();
    let isKamiCouldUse = result;
    setIsCouldUse(isApplePassed && tryUseCount > 0 && isKamiCouldUse);
    if (!isKamiCouldUse) {
      console.log('卡密过期，请前往商店购买');
    }
    if (!isApplePassed) {
      console.log('苹果应用正在审核，请耐心等待');
    }
    if (tryUseCount == 0) {
      console.log('试用次数已用完，请前往商店购买');
    }
  };

  useEffect(() => {
    checkIsCouldUse();
  }, [currentKami, isApplePassed, tryUseCount]);

  return {
    isCouldUse,
  };
};

export { useUsePermission };
