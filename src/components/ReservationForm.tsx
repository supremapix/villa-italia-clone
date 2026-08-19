import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Users, Phone, Mail, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ReservationForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação básica
    if (!formData.name || !formData.phone || !formData.checkIn || !formData.checkOut) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive"
      });
      return;
    }

    // Montar mensagem para WhatsApp
    const message = encodeURIComponent(
      `Olá! Gostaria de fazer uma reserva na Pousada Vila D'Itália.\n\n` +
      `Nome: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Telefone: ${formData.phone}\n` +
      `Check-in: ${formData.checkIn}\n` +
      `Check-out: ${formData.checkOut}\n` +
      `Número de hóspedes: ${formData.guests}\n` +
      `Mensagem: ${formData.message}`
    );

    // Redirecionar para WhatsApp
    window.open(`https://wa.me/5547992738090?text=${message}`, "_blank");

    toast({
      title: "Redirecionando...",
      description: "Você será redirecionado para o WhatsApp para finalizar sua reserva.",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="reservation-form" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Solicite sua Reserva
            </h2>
            <div className="w-20 h-1 bg-cta rounded-full mx-auto mb-6" />
            <p className="text-xl text-muted-foreground">
              Preencha o formulário abaixo e entraremos em contato rapidamente via WhatsApp
            </p>
          </div>

          <Card className="p-8 md:p-12 shadow-elegant border-2 border-primary/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-base font-semibold">
                    Nome Completo *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Seu nome completo"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-base font-semibold">
                    <Phone className="w-4 h-4 inline mr-1" />
                    Telefone/WhatsApp *
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="(00) 00000-0000"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="h-12"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-base font-semibold">
                  <Mail className="w-4 h-4 inline mr-1" />
                  E-mail
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="h-12"
                />
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="checkIn" className="text-base font-semibold">
                    <Calendar className="w-4 h-4 inline mr-1" />
                    Check-in *
                  </Label>
                  <Input
                    id="checkIn"
                    name="checkIn"
                    type="date"
                    value={formData.checkIn}
                    onChange={handleChange}
                    required
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="checkOut" className="text-base font-semibold">
                    <Calendar className="w-4 h-4 inline mr-1" />
                    Check-out *
                  </Label>
                  <Input
                    id="checkOut"
                    name="checkOut"
                    type="date"
                    value={formData.checkOut}
                    onChange={handleChange}
                    required
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="guests" className="text-base font-semibold">
                    <Users className="w-4 h-4 inline mr-1" />
                    Hóspedes
                  </Label>
                  <Input
                    id="guests"
                    name="guests"
                    type="number"
                    min="1"
                    placeholder="2"
                    value={formData.guests}
                    onChange={handleChange}
                    className="h-12"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-base font-semibold">
                  <MessageSquare className="w-4 h-4 inline mr-1" />
                  Mensagem ou Solicitações Especiais
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Conte-nos sobre suas necessidades, preferências ou perguntas..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="resize-none"
                />
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  * Campos obrigatórios. Ao enviar este formulário, você será redirecionado para o WhatsApp 
                  onde nossa equipe finalizará sua reserva e responderá suas dúvidas.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  type="submit"
                  size="lg"
                  className="flex-1 bg-white text-foreground border-2 border-foreground hover:bg-foreground hover:text-white text-lg h-14"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Enviar via WhatsApp
                </Button>
              </div>
            </form>
          </Card>

          {/* Trust Badges */}
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <Card className="p-6 text-center bg-background border-primary/20">
              <div className="text-3xl mb-2">🔒</div>
              <h3 className="font-semibold mb-1">Reserva Segura</h3>
              <p className="text-sm text-muted-foreground">Seus dados protegidos</p>
            </Card>
            <Card className="p-6 text-center bg-background border-primary/20">
              <div className="text-3xl mb-2">⚡</div>
              <h3 className="font-semibold mb-1">Resposta Rápida</h3>
              <p className="text-sm text-muted-foreground">Atendimento em minutos</p>
            </Card>
            <Card className="p-6 text-center bg-background border-primary/20">
              <div className="text-3xl mb-2">💰</div>
              <h3 className="font-semibold mb-1">Melhor Preço</h3>
              <p className="text-sm text-muted-foreground">Garantia de tarifa</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationForm;
