import React from 'react';
import './Explication.css';
import ExplicationBox from './ExplicationBox'; // Verifique o caminho correto para o componente ExplicationBox

const Explication = () => {
  return (
    <section className="explication-section">
      <div className="explication-container">
        <ExplicationBox
          title="Como fazemos isso?"
          content="A (re)energisa é uma empresa de energia solar, ela tem placas solares e beneficia através de contrato a compensação dessa energia nas contas dos nossos clientes. Você não tem custo nenhum, não tem fidelidade e não precisa gastar com instalação, compra de placas..."
        />
        <ExplicationBox
          title="Saiba mais"
          content="seria como se vc comprasse cotas da energia solar gerada pela (re)energisa....
          como a (re)energisa compensa sua energia com a energia gerada, vc paga o CONSUMO no boleto da (re)energisa

          e os impostos e taxas para concessionaria oficial Energisa"
        />
      </div>
    </section>
  );
};

export default Explication;
