import { useEffect, useRef, useState } from 'react';
import { View } from 'react-native';
import Modal from 'react-native-modal';

interface MyProps {
  selector?: any;
  menus?: any;
}

const DropdownMenu: React.FC<MyProps> = props => {
  const { menus } = props;
  const viewRef = useRef<View>(null);
  const [pageY, setPageY] = useState(0);

  useEffect(() => {
    if (viewRef.current) {
      viewRef.current.measure((x, y, width, height, pageX, pageY) => {
        setPageY(pageY);
      });
    }
  }, [viewRef]);

  useEffect(() => {
    console.log('Current Point: ', pageY);
    return function () {};
  }, [pageY]);

  return (
    <Modal>
      <View>{menus}</View>
      <View
        ref={viewRef}
        style={{ height: 1, backgroundColor: 'transparent' }}
      />
    </Modal>
  );
};

export default DropdownMenu;
