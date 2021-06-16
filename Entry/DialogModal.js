import * as React from 'react';
import { Paragraph, Dialog, Portal } from 'react-native-paper';
import { StyleSheet, Text, View } from 'react-native'

const DialogModal = () => {
    const [visible, setVisible] = React.useState(false);

    const hideDialog = () => setVisible(false);
  
    return (
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Content>
            <Paragraph>This is simple dialog</Paragraph>
          </Dialog.Content>
        </Dialog>
      </Portal>
    );
  
}

export default DialogModal

const styles = StyleSheet.create({})



  

