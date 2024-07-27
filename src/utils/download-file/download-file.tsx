import { PropsWithChildren } from 'react';
import createFile from './createFile';

interface IDownloadFileProps extends PropsWithChildren {
  fileName?: string;
}

function DownloadFile(props: IDownloadFileProps) {
  return (
    <a href={createFile('hehehe', 'text/csv;charset=utf-8;')} download={props.fileName}>
      {props.children}
    </a>
  );
}

export default DownloadFile;
