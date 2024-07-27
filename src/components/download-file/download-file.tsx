import createFile from '@utils/download-file/createFile';
import { PropsWithChildren } from 'react';

interface IDownloadFileProps extends PropsWithChildren {
  fileName?: string;
  fileContent: string;
}

function DownloadFile(props: IDownloadFileProps) {
  return (
    <a href={createFile(props.fileContent, 'text/csv;charset=utf-8;')} download={props.fileName}>
      {props.children}
    </a>
  );
}

export default DownloadFile;
