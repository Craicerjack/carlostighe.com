export default function(){
  this.transition(
    this.fromRoute('index'),
    this.toRoute('marvel'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('index'),
    this.toRoute('spotify'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
};