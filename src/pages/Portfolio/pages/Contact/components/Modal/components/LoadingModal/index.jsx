import { Loader2 } from '../../../../../../../../loaders/loader2';

export function LoadingModal() {
  return (
    <>
      <div className='Modal--title'>Enviando...</div>
      <Loader2 />
    </>
  );
}
